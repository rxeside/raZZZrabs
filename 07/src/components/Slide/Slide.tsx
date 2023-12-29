import { CSSProperties, useContext } from 'react'
import BaseBlock from '../common/BaseBlock/BaseBlock'
import { Slide as TSlide } from '../../model/main'
import { PageContext } from '../../context/page'
import { useDraggableElement } from '../../hooks/useDraggableElement'

type SlideProps = {
  slide: TSlide
  className?: string
}

function Slide({ slide, className }: SlideProps) {
  const styleVar: CSSProperties = {}

  function setClassName(slide: TSlide, className?: string) {
    if (slide && !className) {
      return 'slide'
    } else if (className && !slide) {
      return className
    } else if (className && slide) {
      return className
    }
    return ''
  }

  function hex2rgb(c: string, o: number) {
    const bigint = parseInt(c.substring(1), 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    const x = o * 100

    return 'rgb(' + r + ' ' + g + ' ' + b + ' / ' + x + '%' + ')'
  }

  function setBackground(slide: TSlide, style: CSSProperties) {
    if (
      slide.slideBackground.color.hex &&
      !slide.slideBackground.color.opacity
    ) {
      style.backgroundColor = slide.slideBackground.color.hex
    } else if (
      slide.slideBackground.color.opacity &&
      slide.slideBackground.color.hex
    ) {
      style.backgroundColor = hex2rgb(
        slide.slideBackground.color.hex,
        slide.slideBackground.color.opacity,
      )
    }
    return style
  }

  const { page, setPage } = useContext(PageContext)

  const slideCur =
    page.slides.find((s) => s.slideID === page.selection.slideID) || undefined

  const elCur =
    slideCur?.slideObjects.find(
      (element) => element.id === page.selection.elementID,
    ) || undefined

  const { registerDndItem } = useDraggableElement({
    onOrderChange: (toY, toX) => {
      if (elCur) {
        const newDot = elCur.startDot
        if (newDot) {
          newDot.x = toX
          newDot.y = toY
        }
        const newEl = { ...elCur, startDot: newDot }
        const index = slideCur?.slideObjects.indexOf(elCur) ?? -1
        if (index !== -1 && slideCur) {
          const newObjects = [...slideCur.slideObjects]
          newObjects.splice(index, 1, newEl)
          const updatedSlides = page.slides.map((s) =>
            s.slideID === slideCur.slideID ? slideCur : s,
          )
          setPage({ ...page, slides: updatedSlides })
        }
      }
    },
  })

  return (
    <div
      className={setClassName(slide, className)}
      style={setBackground(slide, styleVar)}
    >
      {slide.slideObjects.map((object, index) => (
        <BaseBlock
          key={object.id}
          {...object}
          registerDndItem={registerDndItem}
          index={index}
        />
      ))}
    </div>
  )
}

export default Slide

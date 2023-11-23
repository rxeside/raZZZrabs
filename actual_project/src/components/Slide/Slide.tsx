import { CSSProperties } from 'react'
import BaseBlock from '../common/BaseBlock/BaseBlock'
import { Slide as TSlide } from '../../model/main'

type SlideProps = {
  slide: TSlide
  className?: string
  elementSelect?: string
}

function Slide({ slide, className, elementSelect }: SlideProps) {
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

  return (
    <div
      className={setClassName(slide, className)}
      style={setBackground(slide, styleVar)}
    >
      {slide.slideObjects.map((object) => (
        <BaseBlock key={object.id} {...object} elementSelect={elementSelect} />
      ))}
    </div>
  )
}

export default Slide

import { CSSProperties } from 'react'
import BaseBlock from '../common/BaseBlock/BaseBlock'
import { Slide as TSlide } from '../../model/main'

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
      style.opacity = slide.slideBackground.color.opacity
      style.backgroundColor = slide.slideBackground.color.hex
    }
    return style
  }

  return (
    <div
      className={setClassName(slide, className)}
      style={setBackground(slide, styleVar)}
    >
      {slide.slideObjects.map((object) => (
        <BaseBlock key={object.id} {...object} />
      ))}
    </div>
  )
}

export default Slide

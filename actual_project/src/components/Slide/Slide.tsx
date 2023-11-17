import { CSSProperties } from 'react'
import BaseBlock from '../common/BaseBlock/BaseBlock'
import { Slide as TSlide } from '../../model/main'

type SlideProps = {
  slide: TSlide
  className?: string
}

function Slide({ slide, className }: SlideProps) {
  const style: CSSProperties = {}

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

  if (slide.slideBackground.color) {
    style.background = slide.slideBackground.color.hex
  }

  return (
    <div className={setClassName(slide, className)} style={style}>
      {slide.slideObjects.map((object) => (
        <BaseBlock key={object.id} {...object} />
      ))}
    </div>
  )
}

export default Slide

import { CSSProperties } from 'react'
import BaseBlock from '../common/BaseBlock/BaseBlock'
import { Slide as TSlide } from '../../model/main'

type SlideProps = {
  slide: TSlide
  isSelectedSlide: boolean
  className?: string
}

function Slide({ slide, isSelectedSlide, className }: SlideProps) {
  const style: CSSProperties = {
    background: slide.background,
  }

  function setClassName(
    slide: TSlide,
    isSelectedSlide: boolean,
    className?: string,
  ) {
    if (slide) {
      return 'slide'
    }
    if (className) {
      return className
    }
    if (isSelectedSlide) {
      return 'slide__select'
    }
    return ''
  }

  return (
    <div
      className={setClassName(slide, isSelectedSlide, className)}
      style={style}
    >
      {slide.slideObjects.map((object) => (
        <BaseBlock key={object.elements} {...object} />
      ))}
    </div>
  )
}

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

  function hex2rgb(c: string) {
    const bigint = parseInt(c.substring(1), 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255

    return 'rgb(' + r + ' ' + g + ' ' + b + ')'
  }

  function setBackground(slide: TSlide, style: CSSProperties) {
    if (slide.slideBackground.color.hex) {
      style.backgroundColor = hex2rgb(slide.slideBackground.color.hex)
    }
    return style
  }

  return (
    <div
      className={setClassName(slide, className)}
      style={setBackground(slide, styleVar)}
    >
      {slide.slideObjects.map((object, index) => (
        <BaseBlock
          key={object.id}
          {...object}
          startDot={object.startDot}
          index={index}
        />
      ))}
    </div>
  )
}

export default Slide

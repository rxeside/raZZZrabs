import { CSSProperties } from 'react'
import BaseBlock from '../common/BaseBlock/BaseBlock'
import { Slide as TSlide } from '../../model/main'

type SlideProps = {
  slide: TSlide
  className?: string
}

function Slide({ slide, className }: SlideProps) {
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

  const style: CSSProperties = {
    backgroundColor:
      slide.slideBackground.color.hex != '' && slide.slideBackground.url == ''
        ? hex2rgb(slide.slideBackground.color.hex)
        : undefined,
    backgroundImage:
      slide.slideBackground.color.hex == '' && slide.slideBackground.url != ''
        ? 'url(' + slide.slideBackground.url + ')'
        : undefined,
    backgroundSize: 'cover',
  }

  return (
    <div className={setClassName(slide, className)} style={style}>
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

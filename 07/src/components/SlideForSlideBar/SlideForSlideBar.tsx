import { CSSProperties, useEffect, useRef } from 'react'
import BaseBlock from '../common/BaseBlock/BaseBlock'
import {
  Slide as TSlide,
  SlideSelection as TSlideSelection,
} from '../../model/main'
import classes from '../SlideBar/SlideBar.module.css'
import {
  RegisterDndItemFn,
  UnregisterDndItemFn,
} from '../../hooks/useDraggableList'
import store from '../../store/store'
import { onSelectSlideAction } from '../../store/actionCreators'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { DefaultRootState, useSelector } from 'react-redux'

type SlideProps = {
  slide: TSlide
  className?: string
  registerDndItem: RegisterDndItemFn
  unregisterDndItem: UnregisterDndItemFn
  index: number
}

function SlideForSlideBar({
  slide,
  className,
  registerDndItem,
  unregisterDndItem,
  index,
}: SlideProps) {
  const styleVar: CSSProperties = {}

  const page: DefaultRootState = useSelector((state) => state)

  const ref = useRef<HTMLDivElement>(null)
  const dndControlRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const { onDragStart } = registerDndItem(index, {
      elementRef: ref,
      controlRef: dndControlRef,
    })

    const stopDefAction = (evt: MouseEvent) => {
      evt.preventDefault()
    }

    const onMouseDown = (mouseDownEvent: MouseEvent) => {
      onDragStart({
        onDrag: (dragEvent) => {
          stopDefAction(mouseDownEvent)
          ref.current!.style.position = 'relative'
          ref.current!.style.zIndex = '1'
          ref.current!.style.boxShadow = 'black 2px 2px 4px'
          ref.current!.style.top = `${
            dragEvent.clientY - mouseDownEvent.clientY
          }px`
        },
        onDrop: () => {
          ref.current!.style.position = ''
          ref.current!.style.zIndex = ''
          ref.current!.style.boxShadow = ''
          ref.current!.style.top = ''
        },
      })
    }

    const control = dndControlRef.current!
    control.addEventListener('mousedown', onMouseDown)
    return () => {
      control.removeEventListener('mousedown', onMouseDown)
      unregisterDndItem(index)
    }
  }, [index, registerDndItem])

  function isSelectedSlide(selection: TSlideSelection | null, slide: TSlide) {
    if (selection != null) {
      if (slide.slideID == selection.slideID) {
        return true
      }
    }
    return false
  }

  function setClassSelected(bool: boolean) {
    if (bool) {
      return classes.slideBarWrapperSelected
    }
    return classes.slideBarWrapper
  }

  function setClassName(slide: TSlide, className?: string) {
    if (slide && !className) {
      return classes.slideBarSlide
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
    <div key={slide.slideID} className={classes.slideBarElement}>
      <div className={classes.slideBarIndex}>{index + 1}</div>
      <div
        className={setClassSelected(isSelectedSlide(page.selection, slide))}
        onClick={() => store.dispatch(onSelectSlideAction(slide.slideID))}
        ref={ref}
      >
        <div
          className={setClassName(slide, className)}
          style={style}
          ref={dndControlRef}
        >
          {slide.slideObjects.map((object, index) => (
            <BaseBlock key={object.id} {...object} index={index} isBar={true} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SlideForSlideBar

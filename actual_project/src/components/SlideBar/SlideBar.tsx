import classes from './SlideBar.module.css'
import Slide from '../Slide/Slide'
import {
  Slide as TSlide,
  SlideSelection as TSlideSelection,
} from '../../model/main'
import useSlideManagement from '../../hooks/useSlideManager'
import { useContext, useEffect, useRef } from 'react'
import { RegisterDndItemFn } from '../../hooks/useDraggableList'
import { PageContext } from '../../context/page'

type SlideBarProps = {
  selectSlide: TSlideSelection | null
  slides: TSlide[]
  registerDndItem: RegisterDndItemFn
}

function SlideBar({ selectSlide, slides, registerDndItem }: SlideBarProps) {
  const { onSelectSlide } = useSlideManagement()

  const { page } = useContext(PageContext)

  const selectedIndex = page.slides.findIndex(function (slide) {
    if (slide.slideID === page.selection.slideID) {
      return slide
    }
  })

  const ref = useRef<HTMLDivElement>(null)
  const dndControlRef = useRef<HTMLDivElement>(null)

  console.log(selectedIndex)

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

  useEffect(() => {
    // TODO: эту логику перемещения можно вынести в отдельный компонент, div, который сможет отрисовывать в себе любой контент
    const { onDragStart } = registerDndItem(selectedIndex, {
      elementRef: ref,
      controlRef: dndControlRef,
    })

    const onMouseDown = (mouseDownEvent: MouseEvent) => {
      onDragStart({
        onDrag: (dragEvent) => {
          // TODO: можно вынести в стили и использовать как-то так ref.current!.classList.add(styles.dragging) либо через useState
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
    return () => control.removeEventListener('mousedown', onMouseDown)
  }, [selectedIndex, registerDndItem])

  return (
    <div className={classes.slideBar}>
      {slides.length > 0 &&
        slides.map((slide, index) => (
          <div
            key={slide.slideID}
            className={classes.slideBarElement}
            ref={ref}
          >
            <div className={classes.slideBarIndex}>{index + 1}</div>
            <div
              className={setClassSelected(isSelectedSlide(selectSlide, slide))}
              onClick={() => onSelectSlide(slide.slideID)}
              ref={dndControlRef}
            >
              <Slide
                slide={slide}
                className={classes.slideBarSlide}
                elementSelect={null}
              />
            </div>
          </div>
        ))}
    </div>
  )
}

export default SlideBar

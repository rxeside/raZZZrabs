import classes from './SlideBar.module.css'
import SlideForSlideBar from '../SlideForSlideBar/SlideForSlideBar'
import { Slide as TSlide } from '../../model/main'
import { useDraggableList } from '../../hooks/useDraggableList'
import { useContext } from 'react'
import { PageContext } from '../../context/page'

type SlideBarProps = {
  slides: TSlide[]
}

function SlideBar({ slides }: SlideBarProps) {
  const { page, setPage } = useContext(PageContext)

  const { registerDndItem } = useDraggableList({
    onOrderChange: (from, to) => {
      const newNotes = page.slides
      const removed = newNotes.splice(from, 1)
      newNotes.splice(to, 0, removed[0])
      setPage({ ...page, slides: newNotes })
    },
  })

  return (
    <div className={classes.slideBar}>
      {slides.length > 0 &&
        slides.map((slide, index) => (
          <SlideForSlideBar
            slide={slide}
            index={index}
            registerDndItem={registerDndItem}
          />
        ))}
    </div>
  )
}

export default SlideBar

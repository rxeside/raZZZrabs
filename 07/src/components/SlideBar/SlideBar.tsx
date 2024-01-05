import classes from './SlideBar.module.css'
import SlideForSlideBar from '../SlideForSlideBar/SlideForSlideBar'
import { useDraggableList } from '../../hooks/useDraggableList'
import { useSelector } from 'react-redux'
import { Page } from '../../model/main'

function SlideBar() {
  const page = useSelector((state) => state)
  console.log(page.slides)

  const { registerDndItem } = useDraggableList({
    onOrderChange: (from, to) => {
      const newNotes = page.slides
      const removed = newNotes.splice(from, 1)
      newNotes.splice(to, 0, removed[0])
      //setPage({ ...page, slides: newNotes })
    },
  })

  return (
    <div className={classes.slideBar}>
      {page.slides.length > 0 &&
        page.slides.map((slide, index) => (
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

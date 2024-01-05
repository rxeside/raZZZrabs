import './App.css'
import Header from './components/Header/Header'
import SlideBar from './components/SlideBar/SlideBar'
import Workspace from './components/WorkSpace/Workspace'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { DefaultRootState, useSelector } from 'react-redux'

function App() {
  const page: DefaultRootState = useSelector((state) => state)

  const slide =
    page.slides.find(function (slide: { slideID: string }) {
      if (slide.slideID == page.selection.slideID) {
        return slide
      }
      return null
    }) || null

  const object =
    slide?.slideObjects.find(function (object: { id: string }) {
      if (
        object.id == page.selection.elementID &&
        page.selection.elementID != null
      ) {
        return object
      }
    }) || null

  return (
    <div className="app">
      <Header presentationName={page.title} selectedObject={object} />
      <div className="editor">
        <SlideBar />
        {slide && <Workspace slide={slide} />}
      </div>
    </div>
  )
}

export default App

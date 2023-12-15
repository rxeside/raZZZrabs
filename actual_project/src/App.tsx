import React, { useContext } from 'react'
import './App.css'
import Header from './components/Header/Header'
import SlideBar from './components/SlideBar/SlideBar'
import Workspace from './components/WorkSpace/Workspace'
import { PageContext } from './context/page'

function App() {
  const { page } = useContext(PageContext)

  const slide =
    page.slides.find(function (slide) {
      if (slide.slideID == page.selection.slideID) {
        return slide
      }
      return null
    }) || null

  const object =
    slide?.slideObjects.find(function (object) {
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
        <SlideBar selectSlide={page.selection} slides={page.slides} />
        {slide && (
          <Workspace slide={slide} selectSlide={page.selection.elementID} />
        )}
      </div>
    </div>
  )
}

export default App

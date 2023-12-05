import React, { useContext } from 'react'
import './App.css'
import Header from './components/Header/Header'
import SlideBar from './components/SlideBar/SlideBar'
import Workspace from './components/WorkSpace/Workspace'
import { PageContext } from './context/page'
import useSlideManagement from './hooks/useSlideManager'

function App() {
  const { page } = useContext(PageContext)
  const { addSlide, removeSlide } = useSlideManagement() // Используйте ваш хук

  const slide = page.slides.find(function (slide) {
    if (slide.slideID == page.selection.slideID) {
      return slide
    }
    return null
  })

  return (
    <div className="app">
      <Header
        presentationName={page.title}
        onAddSlide={addSlide}
        onRemoveSlide={() => removeSlide(page.selection.slideID as string)}
      />
      <div className="editor">
        <SlideBar selectSlide={page.selection} slides={page.slides} />
        {slide && (
          <Workspace slide={slide} selectSlide={page.selection.elementIDS} />
        )}
      </div>
    </div>
  )
}

export default App

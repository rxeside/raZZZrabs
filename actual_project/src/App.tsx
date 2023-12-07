import React, { useContext } from 'react'
import './App.css'
import Header from './components/Header/Header'
import SlideBar from './components/SlideBar/SlideBar'
import Workspace from './components/WorkSpace/Workspace'
import { PageContext } from './context/page'
import useSlideManagement from './hooks/useSlideManager'
import useElementManagement from './hooks/useElementManager'

function App() {
  const { page } = useContext(PageContext)
  const { addSlide, removeSlide, selectSlide } = useSlideManagement()
  const { selectElement } = useElementManagement()

  const slide = page.slides.find(function (slide) {
    if (slide.slideID == page.selection.slideID) {
      return slide
    }
    return null
  })

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
      <Header
        presentationName={page.title}
        onAddSlide={() => addSlide(page.selection.slideID as string)}
        onRemoveSlide={() => removeSlide(page.selection.slideID as string)}
        selectedObject={object}
      />
      <div className="editor">
        <SlideBar
          selectSlide={page.selection}
          slides={page.slides}
          onSelectSlide={selectSlide}
        />
        {slide && (
          <Workspace
            slide={slide}
            selectSlide={page.selection.elementID}
            onSelectElement={selectElement}
          />
        )}
      </div>
    </div>
  )
}

export default App

import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Page } from './model/main'
import SlideBar from './components/SlideBar/SlideBar'
import Workspace from './components/WorkSpace/Workspace'

type AppProps = {
  page: Page
}

function App({ page }: AppProps) {
  return (
    <div className="app">
      <Header presentationName={page.title} />
      <div className="editor">
        <SlideBar selectSlide={page.selection} slides={page.slides} />
        <Workspace slides={page.slides} selectSlide={page.selection} />
      </div>
    </div>
  )
}

export default App

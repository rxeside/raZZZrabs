import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import SlideBar from './components/SlideBar/SlideBar'
import { Page } from './model/main'

type AppProps = {
  page: Page
}

function App({ page }: AppProps) {
  return (
    <div className="app">
      <Header presentationName={page.title} />
      <SlideBar selectSlides={page.slides} slides={page.slides} />
    </div>
  )
}

export default App

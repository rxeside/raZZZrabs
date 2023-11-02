import React from 'react'
import './App.css'
import { PageComponent } from './data/PageView'
import { maxPage } from './tests/maxTests'

function App() {
  return (
    <div className="App">
      <h1>{maxPage.title}</h1>
      <PageComponent page={maxPage}></PageComponent>
    </div>
  )
}

export default App

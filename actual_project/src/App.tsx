import React from 'react'
import './App.css'
import { Page } from "./types/types.ts";

type AppProps = {
  page: Page;
};

function App({ page }: AppProps) {
  return (
    <div className="app">
      <Header presentationName={page.title} />
      <Editor presentation={page} />
    </div>
  );
}

export default App

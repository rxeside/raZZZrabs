import React, { useState } from 'react';
import { Slide } from '../model/main';
function SlideView(props: {slide: Slide}) {
  const {title, text} = props.slide

  const [background, setBackground] = useState(props.slide.slideBackground.color)

  return (
    <div style={{backgroundColor: background}}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export {
  SlideView,
}
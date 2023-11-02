import React from 'react';
const TextBlockComponent = ({textBlock}) => {
  return (
    <div>
      <p>{textBlock.value}</p>
      {/* Остальные свойства текстового блока */}
    </div>
  );
};

const ImageBlockComponent = ({imageBlock}) => {
  return (
    <div>
      <img src={imageBlock.image.data} alt="Image"/>
      {/* Остальные свойства блока с изображением */}
    </div>
  );
};

const ShapeBlockComponent = ({shapeBlock}) => {
  return (
    <div>
      {/* Отображение фигуры */}
      {/* Остальные свойства блока с фигурой */}
    </div>
  );
};

// Компонент для отображения элемента слайда
const SlideElementComponent = ({slideElement}) => {
  if (slideElement.elementType === ElementType.TEXT) {
    return <TextBlockComponent textBlock={slideElement}/>;
  } else if (slideElement.elementType === ElementType.IMAGE) {
    return <ImageBlockComponent imageBlock={slideElement}/>;
  } else if (slideElement.elementType === ElementType.SHAPE) {
    return <ShapeBlockComponent shapeBlock={slideElement}/>;
  } else {
    return null;
  }
};

const SlideComponent = ({slide}) => {
  return (
    <div>
      {slide.slideObjects.map((slideElement) => (
        <SlideElementComponent key={slideElement.elementID} slideElement={slideElement}/>
      ))}
    </div>
  );
};

const PageComponent = ({page}) => {
  return (
    <div>
      {page.slides.map((slide) => (
        <SlideComponent key={slide.slideID} slide={slide}/>
      ))}
    </div>
  );
};

export {PageComponent}
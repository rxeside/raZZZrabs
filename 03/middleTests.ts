import {
  PrimitiveType,
  ElementType,
  BorderStyleType,
  Page,
  Slide,
  ShapeBlock,
  BorderType,
  ColorType,
} from "./main";

const shapeBlockColor: ColorType = {
  hex: "#FF032A",
  opacity: 0,
};

const shapeBlockBorder: BorderType = {
  color: {
    hex: "#000000",
    opacity: 0,
  },
  width: 1,
  borderStyle: BorderStyleType.SOLID,
};

const shapeBlock: ShapeBlock = {
  startDot: {
    x: 23,
    y: 47,
  },
  width: 30,
  height: 30,
  scale: 1,
  elementID: "1",
  primitiveType: PrimitiveType.CIRCLE,
  color: shapeBlockColor,
  border: shapeBlockBorder,
  elementType: ElementType.SHAPE,
};

const midSlide: Slide = {
  slideObjects: [
    {
      elements: [shapeBlock],
    },
  ],
  slideID: "1",
  slideBackground: {
    color: {
      hex: "#FF00FF",
      opacity: 0.1,
    },
  },
};

const midPage: Page = {
  slides: [midSlide],
  slideHistory: {
    lastSave: [midSlide],
  },
  selection: {
    slideID: "1",
    elementID: "1",
  },
  title: "Sample Presentation",
};

console.log(midPage, shapeBlock);

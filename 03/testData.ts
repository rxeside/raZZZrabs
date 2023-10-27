import {
  ImageTypeVariation,
  PrimitiveType,
  VerticalAlignType,
  ElementType,
  BorderStyleType,
  Page,
  SlideSelection,
  SlideHistory,
  Slide,
  SlideElement,
  BackgroundType,
  ImageBlock,
  ImageType,
  ShapeBlock,
  TextBlock,
  OutlineType,
  BaseBlock,
  BorderType,
  Dot,
} from "./main";

const presentationMaker: Page = {
  slides: [
    {
      slideObjects: [],
      slideID: "1",
      slideBackground: {
        color: {
          hex: "#FFFFFF",
          opacity: 1,
        },
      },
    },
  ],
  slideHistory: [
    {
      lastSave: [
        {
          slides: [
            {
              slideObjects: [],
              slideID: "1",
              slideBackground: {
                color: {
                  hex: "#FFFFFF",
                  opacity: 1,
                },
              },
              selection: {
                slideId: "1",
              },
            },
          ],
        },
      ],
    },
  ],
  selection: {
    slideID: "1",
    elementID: "",
  },
  title: "Presentation maker",
};

const shape: ShapeBlock = {
  startDot: {
    x: 0,
    y: 0,
  },
  width: 0,
  height: 0,
  scale: 0,
  elementID: "0",
  primitiveType: PrimitiveType.CIRCLE,
  color: {
    hex: "",
    opacity: 0,
  },
  border: {
    color: {
      hex: "",
      opacity: 0,
    },
    width: 0,
    round: 0,
    borderStyle: BorderStyleType.DASHED,
  },
  elementType: ElementType.SHAPE,
};
console.log(shape);

console.log(presentationMaker);

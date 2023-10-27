import {
  ImageTypeVariation,
  PrimitiveType,
  VerticalAlignType,
  HorizontalAlignType,
  ElementType,
  BorderStyleType,
  Page,
  Slide,
  BackgroundType,
  ImageBlock,
  ImageType,
  ShapeBlock,
  TextBlock,
  OutlineType,
  BorderType,
  ColorType,
} from "./main";

const rectanglecolor: ColorType = {
  hex: "#FF03AB",
  opacity: 0.7,
};

const rectangleBorder: BorderType = {
  color: {
    hex: "#4F4F4F",
    opacity: 0.4,
  },
  width: 4,
  round: 5,
  borderStyle: BorderStyleType.SOLID,
};

const shapeBlockRectangle: ShapeBlock = {
  startDot: {
    x: 76,
    y: 24,
  },
  width: 30,
  height: 30,
  scale: 1,
  elementID: "1",
  primitiveType: PrimitiveType.RECTANGLE,
  color: rectanglecolor,
  border: rectangleBorder,
  elementType: ElementType.SHAPE,
};

const triangleColor: ColorType = {
  hex: "#00FF00",
  opacity: 1,
};

const shapeBlockTriangle: ShapeBlock = {
  startDot: {
    x: 54,
    y: 48,
  },
  width: 100,
  height: 150,
  scale: 1.5,
  elementID: "2",
  primitiveType: PrimitiveType.TRIANGLE,
  color: triangleColor,
  elementType: ElementType.SHAPE,
};

const circleColor: ColorType = {
  hex: "#FF03AB",
  opacity: 0.7,
};

const circleBorder: BorderType = {
  color: {
    hex: "#4F4F4F",
    opacity: 0.4,
  },
  width: 4,
  borderStyle: BorderStyleType.DOUBLED,
};

const shapeBlockCircle: ShapeBlock = {
  startDot: {
    x: 12,
    y: 256,
  },
  width: 175,
  height: 100,
  scale: 1,
  elementID: "1",
  primitiveType: PrimitiveType.CIRCLE,
  color: circleColor,
  border: circleBorder,
  elementType: ElementType.SHAPE,
};

const textBolockOutline: OutlineType = {
  bold: false,
  italic: true,
  underline: true,
};

const textBlock: TextBlock = {
  startDot: {
    x: 100,
    y: 100,
  },
  width: 250,
  height: 100,
  scale: 1,
  value: "Съешь ещё этих мягких французских булок, да выпей чаю",
  color: {
    hex: "#FF0000",
    opacity: 0,
  },
  fontSize: 16,
  verticalAlign: VerticalAlignType.TOP,
  horizontalAlign: HorizontalAlignType.RIGHT,
  outline: textBolockOutline,
  elementID: "3",
  elementType: ElementType.TEXT,
};

const imageBase64BlockDataType: ImageType = {
  data: "9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAyAEsDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9EKKKKACipLKzm1K/gtbeMy3F1KkMSAgF3ZgqrzxySBzxzXXXnwXm0+6kt7jxZ8P4LiFzHLFJrRV43U4ZWHlcEEEEdiKAONorrf8AhUf/AFOPw7/8HZ/+NUf8Kj/6nH4d/wDg7P8A8aoA5Kitrxh4Eu/BcdjLNdaVqFpqSSNbXWnXX2iCUxtsdQ2AcqxAPGMnGcggYtABRRRQAUUUUAa3w+/5KH4d/wCwtZ/+j0r1LwH4h8DaP4q8dR+KoLF719dvHjkurM3CmASt8qfK2GDbyQACcr1xx5b8Pv8Akofh3/sLWf8A6PSvX/hB8ILDxr8S/FmvakwuIdN8RXtvDaMvyPKspfe/qBvXC+oOc8CgDx3RvDVx448Wf2foNnNIbqVzbxO2TDFu4MjcgBVIy3r0ySAev+Lv7PmofDDTLfUI5v7SsNirdSqm37NL3yP+eZPRj06HsT9GeEvhzongS4vpdJsobOTUpfNmK/oq/wB1ByQowoLHAFbVzDHeQtFIqSRyAq6MAyuDwQR3BoA+RfGP/JHPh/8A9xb/ANKxXI11ni0/8WX+Hv01X/0rWuToAKKKKACiiigCbTdQm0fVLW8t2VbizmS4iLLuAdGDKSO/IHFddqXxP0PWb+a7vPAehXN3dSNNNKbmUeY7EszY7ZYk4964uigDrf8AhPPDP/RPNB/8CpaP+E88M/8ARPNB/wDAqWuSooA3vG3jr/hL7XTbWDTbPSdP0lJVtra3LNtMrh5CWY5OWAPbHPrWDRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//Z",
  type: ImageTypeVariation.BASE64,
};

const imageBase64BlockBorder: BorderType = {
  color: {
    hex: "#000000",
    opacity: 0,
  },
  width: 5,
  round: 3,
  borderStyle: BorderStyleType.DOTTED,
};

const imageBase64Block: ImageBlock = {
  startDot: {
    x: 23,
    y: 47,
  },
  width: 640,
  height: 480,
  scale: 1,
  elementID: "4",
  image: imageBase64BlockDataType,
  border: imageBase64BlockBorder,
  elementType: ElementType.IMAGE,
};

const imageUrlBlockDataType: ImageType = {
  data: "https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fscontent-hel2-1.cdninstagram.com%2Fv%2Ft51.2885-15%2Fe35%2F117264615_682271212356294_5046271238849355793_n.jpg%3F_nc_ht%3Dscontent-hel2-1.cdninstagram.com%26_nc_cat%3D106%26_nc_ohc%3DVKOO-llUDSYAX9UKwHK%26oh%3D7409760017f71b4f3341538b48a2f4d5%26oe%3D5F560A57&lr=41&pos=9&rpt=simage&text=w126%20sec",
  type: ImageTypeVariation.URL,
};

const imageUrlBlockBorder: BorderType = {
  color: {
    hex: "#B7B7B7",
    opacity: 0.98,
  },
  width: 3,
  round: 10,
  borderStyle: BorderStyleType.DASHED,
};

const imageUrlBlock: ImageBlock = {
  startDot: {
    x: 56,
    y: 100,
  },
  width: 1920,
  height: 1080,
  scale: 2,
  elementID: "6",
  image: imageUrlBlockDataType,
  border: imageUrlBlockBorder,
  elementType: ElementType.IMAGE,
};

const firstSlideBackground: BackgroundType = {
  color: {
    hex: "#FF00FF",
    opacity: 0.1,
  },
  image: {
    data: "https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fa.d-cd.net%2Ff0a2d88s-960.jpg&lr=41&pos=2&rpt=simage&text=w126%20sec",
    type: ImageTypeVariation.URL,
  },
};

const firstSlide: Slide = {
  slideObjects: [
    {
      elements: [shapeBlockRectangle, imageUrlBlock],
    },
  ],
  slideID: "1",
  slideBackground: firstSlideBackground,
};

const secondSlideBackground: BackgroundType = {
  color: {
    hex: "#F2BAFF",
    opacity: 0.3,
  },
};

const secondSlide: Slide = {
  slideObjects: [
    {
      elements: [shapeBlockCircle, shapeBlockTriangle],
    },
  ],
  slideID: "2",
  slideBackground: secondSlideBackground,
};

const thirdSlideBackground: BackgroundType = {
  color: {
    hex: "#FFF000",
    opacity: 0.3,
  },
};
const thirdSlide: Slide = {
  slideObjects: [
    {
      elements: [imageBase64Block, textBlock],
    },
  ],
  slideID: "3",
  slideBackground: thirdSlideBackground,
};

const maxPage: Page = {
  slides: [firstSlide, secondSlide, thirdSlide],
  slideHistory: {
    lastSave: [firstSlide, secondSlide, thirdSlide],
  },
  selection: {
    slideID: "2",
    elementID: "2",
  },
  title: "Sample Presentation",
};

console.log(maxPage);

enum ImageTypeVariation {
  BASE64 = "base64",
  URL = "url",
}

enum PrimitiveType {
  CIRCLE = "circle",
  TRIANGLE = "triangle",
  RECTANGLE = "rectangle",
}

enum VerticalAlignType {
  TOP = "top",
  CENTER = "center",
  BOTTOM = "bottom",
}

enum HorizontalAlignType {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}

enum ElementType {
  TEXT = "text",
  IMAGE = "image",
  SHAPE = "shape",
}

enum BorderStyleType {
  SOLID = "solid",
  DOTTED = "dotted",
  DASHED = "dashed",
  DOUBLED = "doubled",
  INSERT = "insert",
  OUTSET = "outset",
  NONE = "none",
}
type Page = {
  slides: Slide[];
  slideHistory: SlideHistory;
  selection: SlideSelection;
  title: string;
};

type SlideSelection = {
  slideID: string;
  elementID?: string;
};

type SlideHistory = {
  lastSave: Slide[];
};

type Slide = {
  slideObjects: SlideElement[];
  slideID: string;
  slideBackground: BackgroundType;
};

type BackgroundType = {
  color: ColorType;
  image?: ImageType;
};

type SlideElement = {
  elements: Array<TextBlock | ImageBlock | ShapeBlock>;
};

type ImageBlock = BaseBlock & {
  image: ImageType;
  border?: BorderType;
  elementType: ElementType.IMAGE;
};

type ImageType = {
  data: string;
  type: ImageTypeVariation;
};

type ShapeBlock = BaseBlock & {
  primitiveType: PrimitiveType;
  color: ColorType;
  border?: BorderType;
  elementType: ElementType.SHAPE;
};

type ColorType = {
  hex: string;
  opacity: number;
};

type TextBlock = BaseBlock & {
  value: string;
  color: ColorType;
  fontSize: number;
  verticalAlign: VerticalAlignType;
  horizontalAlign: HorizontalAlignType;
  outline: OutlineType;
  border?: BorderType;
  elementType: ElementType.TEXT;
};

type OutlineType = {
  bold: boolean;
  italic: boolean;
  underline: boolean;
};

type BaseBlock = {
  startDot: Dot;
  width: number;
  height: number;
  scale: number;
  elementID: string;
};

type BorderType = {
  color: ColorType;
  width: number;
  round?: number;
  borderStyle: BorderStyleType;
};

type Dot = {
  x: number;
  y: number;
};

export {
  ImageTypeVariation,
  PrimitiveType,
  VerticalAlignType,
  HorizontalAlignType,
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
  ColorType,
};

enum ImageTypeVariation {
  BASE64 = 'base64',
  URL = 'url',
}

enum PrimitiveType {
  CIRCLE = 'circle',
  TRIANGLE = 'triangle',
  RECTANGLE = 'rectangle',
}

enum VerticalAlignType {
  TOP = 'top',
  CENTER = 'center',
  BOTTOM = 'bottom',
}

enum HorizontalAlignType {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

enum ElementType {
  TEXT = 'text',
  IMAGE = 'image',
  SHAPE = 'shape',
}

enum BorderStyleType {
  SOLID = 'solid',
  DOTTED = 'dotted',
  DASHED = 'dashed',
  DOUBLED = 'doubled',
  INSERT = 'insert',
  OUTSET = 'outset',
  NONE = 'none',
}

type Size = {
  height: number
  width: number
}

type ColorType = {
  hex: string
  opacity: number
}

type ImageType = {
  data: string
  type: ImageTypeVariation
}

type BackgroundType = {
  color: ColorType
  image?: ImageType
}

type OutlineType = {
  bold: boolean
  italic: boolean
  underline: boolean
}

type Dot = {
  x: number
  y: number
}

type BaseBlock = {
  startDot: Dot
  size: Size
  scale?: number
  elementID: string
}

type BorderType = {
  color: ColorType
  width: number
  round?: number
  borderStyle: BorderStyleType
}

type TextBlock = BaseBlock & {
  elementType: ElementType.TEXT
  data: {
    value: string
    color: ColorType
    fontSize: number
    verticalAlign: VerticalAlignType
    horizontalAlign: HorizontalAlignType
    outline: OutlineType
    border?: BorderType
    size: Size
  }
}

type ImageBlock = BaseBlock & {
  elementType: ElementType.IMAGE
  data: {
    image: ImageType
    border?: BorderType
    size: Size
  }
}

type ShapeBlock = BaseBlock & {
  data: {
    primitiveType: PrimitiveType
    color: ColorType
    border?: BorderType
    size: Size
  }
  elementType: ElementType.SHAPE
}

type SlideElement = {
  elements: Array<TextBlock | ImageBlock | ShapeBlock>
}

type Slide = {
  slideObjects: SlideElement[]
  slideID: string
  slideBackground: BackgroundType
}

type SlideSelection = {
  slideID: string
  elementID?: string
}

type SlideHistory = {
  lastSave: Slide[]
}

type Page = {
  slides: Slide[]
  slideHistory: SlideHistory
  selection: SlideSelection
  title: string
}

export {
  ImageTypeVariation,
  PrimitiveType,
  VerticalAlignType,
  HorizontalAlignType,
  ElementType,
  BorderStyleType,
  type SlideSelection,
  type SlideHistory,
  type Slide,
  type Size,
  type SlideElement,
  type BackgroundType,
  type ImageBlock,
  type ImageType,
  type ShapeBlock,
  type TextBlock,
  type OutlineType,
  type BaseBlock,
  type BorderType,
  type Dot,
  type ColorType,
  type Page,
}

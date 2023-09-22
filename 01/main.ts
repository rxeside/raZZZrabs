type TextStyleType = {
    isBold: boolean,
    isItalic: boolean,
    isUnderline: boolean,
    color: string,
    opacity: number,
    fontSize: number,
    fontFamily: string,
}

type VerticalAlign = {
    top: boolean,
    center: boolean,
    bottom: boolean,
}

type HorizontalAlign = {
    left: boolean,
    center: boolean,
    right: boolean,
}

type TextBlock = Array<TextStyleType|VerticalAlign|HorizontalAlign>

type ImageBlock = {
    data: string,
}

type PrimitiveElement = {
    circle: boolean,
    triangle: boolean,
    rectangle: boolean,
}

type PrimitivesType = {
    element: PrimitiveElement,
    color: string,
}

type ShapeBlock = {
    primitives: PrimitivesType,
}



type ElementContent = Array<TextBlock|ImageBlock|ShapeBlock>

type BorderStyleType = {
    solid: boolean,
    doted: boolean,
    dashed: boolean,
    double: boolean,
    inset: boolean,
    outset: boolean,    
}

type BorderType = {
    color: string,
    width: number,
    opacity: number,
    round: number,
    borderStyle: BorderStyleType,
}

type Dot = {
    x: number,
    y: number,
}

type SlideElement = {
    content: ElementContent,
    startDot: Dot,
    width: number,
    height: number,
    opacity: number,
    scale: number,
    border: BorderType,
    elementID: number,
}

type Slide = {
    slideObjects: SlideElement[],
    slideID: number,
}

type StateCheck = {
    slideNumber: number,
    elementNumber: number,
}

type SlideHistory = {
    lastSave: Slide[],
}

type Page = {
    slide: Slide[],
    slideHistory: SlideHistory,
    stateCheck: StateCheck,
    title: string,
}
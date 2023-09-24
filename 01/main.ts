type Dot = {
    x: number,
    y: number,
}

type BorderType = {
    color: string,
    width: number,
    opacity: number,
    round: number,
    borderStyle: 'solid'|'doted'|'dashed'|'doubled'|'insert'|'outset',
}

type BaseBlock = {
    startDot: Dot,
    width: number,
    height: number,
    opacity: number,
    scale: number,
    border: BorderType,
    elementID: number,
}

type OutlineType = {
    bold: boolean,
    italic: boolean,
    underline: boolean,
}

type TextBlock = {
    value: string,
    color: string,
    fontSize: number,
    verticalAlign: 'top'|'center'|'bottom',
    horizontal: 'left'|'center'|'right',
    outline: OutlineType,    
}

type ShapeBlock = {
    primitives: 'circle'|'triangle'|'rectangle',
    color: string,
}

type ImageType = {
    data: string,
}

type ImageBlock = {
    image: ImageType,
}

type BackgroundType = {
    color: string,
    image: ImageType,
}

type SlideElement = Array<TextBlock|ImageBlock|ShapeBlock>

type Slide = {
    slideObjects: SlideElement[],
    slideID: number,
    slideBackground: BackgroundType,
}

type SlideHistory = {
    lastSave: Slide[],
}

type SlideSelection = {
    slideID: number,
    elementID: number,
}

type Page = {
    slides: Slide[],
    slideHistory: SlideHistory,
    stateCheck: SlideSelection,
    title: string,
}
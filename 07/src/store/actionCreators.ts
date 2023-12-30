import {
    IMPORT_PRESENTATION,
    CHANGE_PRESENTATION_TITLE,
    ADD_SLIDE,
    CREATE_SLIDE,
    SELECT_SLIDE,
    SET_BACKGROUND_SLIDE,
    MOVE_SLIDE,
    DELETE_SLIDE,
    SELECT_OBJECT,
    DELETE_OBJECT,
    RESIZE_OBJECT,
    MOVE_OBJECT,
    SET_COLOR_FIGURE,
    CREATE_PRIMITIVE,
    SET_STROKECOLOR_FIGURE,
    CREATE_IMAGE,
    CREATE_TEXTBOX,
    SET_TEXT,
    CHANGE_TEXT_COLOR,
    CHANGE_TEXT_SIZE,
    CHANGE_FONT,
    CHANGE_TEXT_STYLE,
} from './actions'

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
    Size,
    ApplicationState
} from '../model/main'

import ColorPicker from '../components/ColorPicker/ColorPicker'
import BaseBlock from '../components/common/BaseBlock/BaseBlock'
import ImageUploader from '../components/ImageUploader/ImageUploader'
import context from '../context/page'
import useAddImage from '../hooks/useAddImage'
import {RegisterDndItemFn, useDraggableElement} from '../hooks/useDraggableElement'
import {useDraggableList} from '../hooks/useDraggableList'
import useTextElementManager from '../hooks/useTextElementManager'
import {useInfoBar} from '../hooks/useInfoBar'
import useSlideBackgrouond from '../hooks/useSlideBackground'
import useSlideManager from '../hooks/useElementManager'
import useElementManager from '../hooks/useElementManager'

function importPresentation(app: ApplicationState) {
    return {
        type: IMPORT_PRESENTATION,
        app,
    }
}

function changePresentationTitle(title: string) {
    return {
        type: CHANGE_PRESENTATION_TITLE,
        title,
    }
}

function addSlide(slide: Slide) {
    return {
        type: ADD_SLIDE,
        slide,
    }
}

function createSlide() {
    return {
        type: CREATE_SLIDE,
    };
}


function selectSlide(slideId: string) {
    return {
        type: SELECT_SLIDE,
        slideId,
    }
}

function setBackgroundSlide(background: BackgroundType) {
    return {
        type: SET_BACKGROUND_SLIDE,
        background,
    }
}

function moveSlide(delta: number) {
    return {
        type: MOVE_SLIDE,
        delta,
    }
}

function deleteSlide(slideId: string) {
    return {
        type: DELETE_SLIDE,
        slideId,
    }
}

function selectObject(objectId: string) {
    return {
        type: SELECT_OBJECT,
        objectId,
    }
}

function deleteObject() {
    return {
        type: DELETE_OBJECT,
    }
}

function resizeObject(payload: Size) {
    return {
        type: RESIZE_OBJECT,
        payload,
    }
}

function moveObject(payload: RegisterDndItemFn) {
    return {
        type: MOVE_OBJECT,
        payload,
    }
}

function createPrimitive(primitiveType: PrimitiveType) {
    return {
        type: CREATE_PRIMITIVE,
        primitiveType,
        size: { height: 50, width: 50 },
    };
}

function setColorFigure(color: ColorType, size: Size) {
    return {
        type: SET_COLOR_FIGURE,
        color,
        size,
    };
}

function setStrokeFigureColor(color: string) {
    return {
        type: SET_STROKECOLOR_FIGURE,
        color,
    }
}

function createImage(src: string) {
    return {
        type: CREATE_IMAGE,
        src,
    }
}

function createTextbox() {
    return {
        type: CREATE_TEXTBOX,
    }
}

function setText(payload: TextBlock) {
    return {
        type: SET_TEXT,
        payload,
    }
}

function changeTextColor(color: string) {
    return {
        type: CHANGE_TEXT_COLOR,
        color,
    }
}
function changeTextSize(size: number) {
    return {
        type: CHANGE_TEXT_SIZE,
        size,
    }
}

function changeFont(font: string) {
    return {
        type: CHANGE_FONT,
        font,
    }
}

export {
    importPresentation,
    setBackgroundSlide,
    changePresentationTitle,
    addSlide,
    createSlide,
    selectSlide,
    moveSlide,
    deleteSlide,
    selectObject,
    deleteObject,
    resizeObject,
    moveObject,
    createPrimitive,
    setColorFigure,
    setStrokeFigureColor,
    createImage,
    createTextbox,
    setText,
    changeTextColor,
    changeTextSize,
    changeFont,
}
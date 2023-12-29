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
} from '../model/main'

import ColorPicker from '../components/ColorPicker/ColorPicker'
import BaseBlock from '../components/common/BaseBlock/BaseBlock'
import ImageUploader from '../components/ImageUploader/ImageUploader'
import context from '../context/page'
import useAddImage from '../hooks/useAddImage'
import {useDraggableElement} from '../hooks/useDraggableElement'
import {useDraggableList} from '../hooks/useDraggableList'
import useTextElementManager from '../hooks/useTextElementManager'
import {useInfoBar} from '../hooks/useInfoBar'
import useSlideBackgrouond from '../hooks/useSlideBackground'
import useSlideManager from '../hooks/useElementManager'
import useElementManager from '../hooks/useElementManager'
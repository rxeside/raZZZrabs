import {
  ADD_CIRCLE,
  ADD_FONT_SIZE,
  ADD_IMAGE,
  ADD_RECTANGLE,
  ADD_SLIDE,
  ADD_TEXT,
  ADD_TRIANGLE,
  BOLD_TEXT,
  CHANGE_ELEMENT_COLOR,
  CHANGE_SHAPE_STROKE_WIDTH,
  CHANGE_SHAPE_STROKE_COLOR,
  CHANGE_FONT,
  CHANGE_PRESENTATION_TITLE,
  CHANGE_SLIDE_COLOR,
  CHANGE_TEXT_ALIGN_LEFT,
  CHANGE_TEXT_ALIGN_CENTER,
  CHANGE_TEXT_ALIGN_RIGHT,
  DELETE_SLIDE,
  ITALIC_TEXT,
  REMOVE_OBJECT,
  SELECT_OBJECT,
  SELECT_SLIDE,
  SUB_FONT_SIZE,
  UNDERLINE_TEXT,
  UPDATE_PAGE,
  UPDATE_RECT,
  UPDATE_SLIDE,
  GO_TO_LAST_STATE,
  GO_TO_NEXT_STATE,
  ADD_BACK_IMAGE,
  CHANGE_TEXT,
} from './actions'
import { BaseBlock, Slide } from '../model/main'

function addSlideAction() {
  return {
    type: ADD_SLIDE,
  }
}

function removeSlideAction() {
  return {
    type: DELETE_SLIDE,
  }
}

function onSelectSlideAction(slideID: string) {
  return {
    type: SELECT_SLIDE,
    slideID: slideID,
  }
}

function updateSlideAction(slides: Slide[]) {
  return {
    type: UPDATE_SLIDE,
    slides: slides,
  }
}

function changePageTitleAction(title: string) {
  return {
    type: CHANGE_PRESENTATION_TITLE,
    title: title,
  }
}

function updatePageAction(page: any) {
  return {
    type: UPDATE_PAGE,
    page: page,
  }
}

function selectElementAction(elementID: string) {
  return {
    type: SELECT_OBJECT,
    elementID: elementID,
  }
}

function removeElementAction() {
  return {
    type: REMOVE_OBJECT,
  }
}

function addTextElementAction() {
  return {
    type: ADD_TEXT,
  }
}

function addRectangleElementAction() {
  return {
    type: ADD_RECTANGLE,
  }
}

function addImageElementAction(image: string) {
  return {
    type: ADD_IMAGE,
    image: image,
  }
}

function addBackImageElementAction(backimage: string) {
  return {
    type: ADD_BACK_IMAGE,
    backImage: backimage,
  }
}

function addTriangleElementAction() {
  return {
    type: ADD_TRIANGLE,
  }
}

function addCircleElementAction() {
  return {
    type: ADD_CIRCLE,
  }
}

function changeElementColorAction(newColor: string) {
  return {
    type: CHANGE_ELEMENT_COLOR,
    newColor: newColor,
  }
}
function changeTextAction(newText: string) {
  return {
    type: CHANGE_TEXT,
    newText: newText,
  }
}

function changeShapeStrokeColorAction(newColor: string) {
  return {
    type: CHANGE_SHAPE_STROKE_COLOR,
    newColor: newColor,
  }
}

function changeSlideColorAction(newColor: string) {
  return {
    type: CHANGE_SLIDE_COLOR,
    newColor: newColor,
  }
}

function onBoldTextAction() {
  return {
    type: BOLD_TEXT,
  }
}

function onItalicTextAction() {
  return {
    type: ITALIC_TEXT,
  }
}

function onUnderlineTextAction() {
  return {
    type: UNDERLINE_TEXT,
  }
}

function changeTextAlignCenterAction() {
  return {
    type: CHANGE_TEXT_ALIGN_CENTER,
  }
}

function changeTextAlignLeftAction() {
  return {
    type: CHANGE_TEXT_ALIGN_LEFT,
  }
}

function changeTextAlignRightAction() {
  return {
    type: CHANGE_TEXT_ALIGN_RIGHT,
  }
}

function changeFontFamilyAction(fontName: string) {
  return {
    type: CHANGE_FONT,
    fontName: fontName,
  }
}

function addFontSizeAction() {
  return {
    type: ADD_FONT_SIZE,
  }
}

function subFontSizeTextAction() {
  return {
    type: SUB_FONT_SIZE,
  }
}

function changeShapeStrokeWidth(strokeWidth: string) {
  return {
    type: CHANGE_SHAPE_STROKE_WIDTH,
    strokeWidth: strokeWidth,
  }
}

function updateObjectRectAction(id: string, newRect: BaseBlock) {
  return {
    type: UPDATE_RECT,
    id: id,
    newRect: newRect,
  }
}

function goToLastState() {
  return {
    type: GO_TO_LAST_STATE,
  }
}

function goToNextState() {
  return {
    type: GO_TO_NEXT_STATE,
  }
}

export {
  addSlideAction,
  changeTextAction,
  removeSlideAction,
  onSelectSlideAction,
  updateSlideAction,
  changePageTitleAction,
  updatePageAction,
  selectElementAction,
  removeElementAction,
  addTextElementAction,
  addImageElementAction,
  addCircleElementAction,
  addRectangleElementAction,
  addTriangleElementAction,
  changeElementColorAction,
  changeSlideColorAction,
  onBoldTextAction,
  onItalicTextAction,
  onUnderlineTextAction,
  changeTextAlignCenterAction,
  changeTextAlignLeftAction,
  changeTextAlignRightAction,
  changeShapeStrokeWidth,
  changeShapeStrokeColorAction,
  changeFontFamilyAction,
  addFontSizeAction,
  subFontSizeTextAction,
  updateObjectRectAction,
  goToLastState,
  goToNextState,
  addBackImageElementAction,
}

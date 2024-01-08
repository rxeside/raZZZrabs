import { Page } from '../model/main'
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
  CHANGE_FONT,
  CHANGE_TEXT_ALIGN_LEFT,
  CHANGE_TEXT_ALIGN_CENTER,
  CHANGE_TEXT_ALIGN_RIGHT,
  CHANGE_PRESENTATION_TITLE,
  CHANGE_SLIDE_COLOR,
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
} from './actions'
import {
  addSlide,
  onSelectSlide,
  removeSlide,
  updateSlides,
} from '../methods/slidesMethods'
import { maxPage } from '../tests/maxTests'
import { changeTitle, updatePage } from '../methods/pageMethods'
import {
  addCircleElement,
  addImageElement,
  addRectangleElement,
  addTextElement,
  addTriangleElement,
  onColorChange,
  onElemChange,
  removeElement,
  selectElement,
  updateObjectRect,
} from '../methods/elementsMethods'
import {
  onBigger,
  onBold,
  onFontfamily,
  onItalic,
  onLower,
  onUnderline,
  onCenterAlign,
  onLeftAlign,
  onRightAlign,
} from '../methods/textMethods'

import {
  addToHistory,
  // clearRedo,
  redo,
  undo,
  // undoStack,
} from '../methods/History'

const initialState: Page = maxPage

const defaultApplication: Page = initialState

const pageReducers = (state = defaultApplication, action: any) => {
  switch (action.type) {
    case ADD_SLIDE:
      addToHistory(state)
      return addSlide(state)
    case DELETE_SLIDE:
      addToHistory(state)
      return removeSlide(state)
    case SELECT_SLIDE:
      addToHistory(state)
      return onSelectSlide(state, action.slideID)
    case UPDATE_SLIDE:
      addToHistory(state)
      return updateSlides(state, action.slides)
    case CHANGE_PRESENTATION_TITLE:
      addToHistory(state)
      return changeTitle(state, action.title)
    case UPDATE_PAGE:
      addToHistory(state)
      return updatePage(action.page)
    case SELECT_OBJECT:
      addToHistory(state)
      return selectElement(state, action.elementID)
    case REMOVE_OBJECT:
      addToHistory(state)
      return removeElement(state)
    case ADD_TEXT:
      addToHistory(state)
      return addTextElement(state)
    case ADD_RECTANGLE:
      addToHistory(state)
      return addRectangleElement(state)
    case ADD_TRIANGLE:
      addToHistory(state)
      return addTriangleElement(state)
    case ADD_CIRCLE:
      addToHistory(state)
      return addCircleElement(state)
    case ADD_IMAGE:
      addToHistory(state)
      return addImageElement(state, action.image)
    case CHANGE_ELEMENT_COLOR:
      addToHistory(state)
      return onElemChange(state, action.newColor)
    case CHANGE_SLIDE_COLOR:
      addToHistory(state)
      return onColorChange(state, action.newColor)
    case BOLD_TEXT:
      addToHistory(state)
      return onBold(state)
    case CHANGE_TEXT_ALIGN_CENTER:
      return onCenterAlign(state)
    case CHANGE_TEXT_ALIGN_LEFT:
      return onLeftAlign(state)
    case CHANGE_TEXT_ALIGN_RIGHT:
      return onRightAlign(state)
    case ITALIC_TEXT:
      addToHistory(state)
      return onItalic(state)
    case UNDERLINE_TEXT:
      addToHistory(state)
      return onUnderline(state)
    case CHANGE_FONT:
      addToHistory(state)
      return onFontfamily(state, action.fontName)
    case ADD_FONT_SIZE:
      addToHistory(state)
      return onBigger(state)
    case SUB_FONT_SIZE:
      addToHistory(state)
      return onLower(state)
    case UPDATE_RECT:
      return updateObjectRect(state, action.id, action.newRect)
    case GO_TO_LAST_STATE:
      return undo(state)
    case GO_TO_NEXT_STATE:
      return redo(state)
    default:
      return state
  }
}

export { pageReducers }

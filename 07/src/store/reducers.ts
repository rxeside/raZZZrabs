import { Page } from '../model/main'
import {
  ADD_CIRCLE,
  ADD_IMAGE,
  ADD_RECTANGLE,
  ADD_SLIDE,
  ADD_TEXT,
  ADD_TRIANGLE,
  CHANGE_ELEMENT_COLOR,
  CHANGE_ELEMENT_HEIGHT,
  CHANGE_ELEMENT_WIDTH,
  CHANGE_PRESENTATION_TITLE,
  CHANGE_SLIDE_COLOR,
  DELETE_SLIDE,
  REMOVE_OBJECT,
  SELECT_OBJECT,
  SELECT_SLIDE,
  UPDATE_PAGE,
  UPDATE_SLIDE,
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
  onHeightChange,
  onWidthChange,
  removeElement,
  selectElement,
} from '../methods/elementsMethods'

const initialState: Page = maxPage

const defaultApplication: Page = initialState

const pageReducers = (state = defaultApplication, action: any) => {
  switch (action.type) {
    case ADD_SLIDE:
      return addSlide(state)
    case DELETE_SLIDE:
      return removeSlide(state)
    case SELECT_SLIDE:
      return onSelectSlide(state, action.slideID)
    case UPDATE_SLIDE:
      return updateSlides(state, action.slides)
    case CHANGE_PRESENTATION_TITLE:
      return changeTitle(state, action.title)
    case UPDATE_PAGE:
      return updatePage(action.page)
    case SELECT_OBJECT:
      return selectElement(state, action.elementID)
    case REMOVE_OBJECT:
      return removeElement(state)
    case ADD_TEXT:
      return addTextElement(state)
    case ADD_RECTANGLE:
      return addRectangleElement(state)
    case ADD_TRIANGLE:
      return addTriangleElement(state)
    case ADD_CIRCLE:
      return addCircleElement(state)
    case ADD_IMAGE:
      return addImageElement(state, action.image)
    case CHANGE_ELEMENT_COLOR:
      return onElemChange(state, action.newColor)
    case CHANGE_SLIDE_COLOR:
      return onColorChange(state, action.newColor)
    case CHANGE_ELEMENT_HEIGHT:
      return onHeightChange(state, action.height)
    case CHANGE_ELEMENT_WIDTH:
      return onWidthChange(state, action.width)
    default:
      return state
  }
}

export { pageReducers }

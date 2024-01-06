import { Page } from '../model/main'
import {
  ADD_SLIDE,
  CHANGE_PRESENTATION_TITLE,
  DELETE_SLIDE,
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
import { selectElement } from '../methods/elementsMethods'

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
    default:
      return state
  }
}

export { pageReducers }

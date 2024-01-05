import { Page } from '../model/main'
import { ADD_SLIDE, DELETE_SLIDE, SELECT_SLIDE } from './actions'
import { addSlide, onSelectSlide, removeSlide } from '../methods/slidesMethods'
import { maxPage } from '../tests/maxTests'

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
    default:
      return state
  }
}

export { pageReducers }

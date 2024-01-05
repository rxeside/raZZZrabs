import { ADD_SLIDE, DELETE_SLIDE, SELECT_SLIDE } from './actions'

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

export { addSlideAction, removeSlideAction, onSelectSlideAction }

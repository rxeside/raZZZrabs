import {
  ADD_SLIDE,
  CHANGE_PRESENTATION_TITLE,
  DELETE_SLIDE,
  SELECT_OBJECT,
  SELECT_SLIDE,
  UPDATE_PAGE,
  UPDATE_SLIDE,
} from './actions'
import { Slide } from '../model/main'

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

export {
  addSlideAction,
  removeSlideAction,
  onSelectSlideAction,
  updateSlideAction,
  changePageTitleAction,
  updatePageAction,
  selectElementAction,
}

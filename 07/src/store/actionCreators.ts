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

function changeSlideColorAction(newColor: string) {
  return {
    type: CHANGE_SLIDE_COLOR,
    newColor: newColor,
  }
}

function changeElementHeightAction(height: string) {
  return {
    type: CHANGE_ELEMENT_HEIGHT,
    height: height,
  }
}

function changeElementWidthAction(width: string) {
  return {
    type: CHANGE_ELEMENT_WIDTH,
    width: width,
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
  removeElementAction,
  addTextElementAction,
  addImageElementAction,
  addCircleElementAction,
  addRectangleElementAction,
  addTriangleElementAction,
  changeElementColorAction,
  changeSlideColorAction,
  changeElementWidthAction,
  changeElementHeightAction,
}

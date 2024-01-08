import { Page } from '../model/main'
import cloneDeep from 'lodash/cloneDeep'

export const undoStack: Array<Page> = []
export const redoStack: Array<Page> = []

function clearRedo() {
  while (redoStack.length > 0) {
    redoStack.pop()
  }
}

function addToHistory(page: Page) {
  const ban = cloneDeep({ page })
  undoStack.push(ban.page)
  console.log(undoStack)
}

function undo(currentState: Page): Page {
  console.log('undo works')
  if (!undoStack.length) {
    return currentState
  }

  const slideState: Page = undoStack.pop()!
  redoStack.push(currentState)
  console.log(slideState)

  return slideState
}

function redo(currentState: Page): Page {
  if (!redoStack.length) {
    return currentState
  }

  const slidesState: Page = redoStack.pop()!

  addToHistory(slidesState)

  return slidesState
}

export { addToHistory, undo, redo, clearRedo }

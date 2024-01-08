import { Page } from '../model/main'

export const undoStack: Array<Page> = []
export const redoStack: Array<Page> = []

function clearRedo() {
  while (redoStack.length > 0) {
    redoStack.pop()
  }
}

function addToHistory(page: Page) {
  undoStack.push(page)
}

function undo(currentState: Page): Page {
  console.log('undo works')
  if (!undoStack.length) {
    return currentState
  }

  const slideState: Page = undoStack.pop()!
  redoStack.push(currentState)

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

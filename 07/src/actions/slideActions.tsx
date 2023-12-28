export const SET_SLIDE_BACKGROUND_COLOR = 'SET_SLIDE_BACKGROUND_COLOR'

export const setSlideBackgroundColor = (slideID, color) => ({
  type: SET_SLIDE_BACKGROUND_COLOR,
  payload: { slideID, color },
})

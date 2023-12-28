// reducers/slideReducer.ts
import { SET_SLIDE_BACKGROUND_COLOR } from '../actions/slideActions'
import { Slide as TSlide } from '../../model/main'

const initialState = {
  slides: [] as TSlide[],
}

const slideReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SLIDE_BACKGROUND_COLOR:
      return {
        ...state,
        slides: state.slides.map((slide) =>
          slide.slideID === action.payload.slideID
            ? {
                ...slide,
                slideBackground: { color: { hex: action.payload.color } },
              }
            : slide,
        ),
      }
    default:
      return state
  }
}

export default slideReducer

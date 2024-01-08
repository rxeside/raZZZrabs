import { Page, Slide, BackgroundType } from '../model/main'

const defaultSlideBackground: BackgroundType = {
  color: {
    hex: '#FFFFFF',
  },
}

const defaultSlideInfo: Slide = {
  slideObjects: [],
  slideID: '1',
  slideBackground: defaultSlideBackground,
}

const minPage: Page = {
  slides: [defaultSlideInfo],
  selection: {
    slideID: '1',
    elementID: null,
  },
  title: 'Sample Presentation',
}

console.log(minPage)

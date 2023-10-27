import { Page, Slide, BackgroundType } from "./main";

const defaultSlideBackground: BackgroundType = {
  color: {
    hex: "#FFFFFF",
    opacity: 1,
  },
};

const defaultSlideInfo: Slide = {
  slideObjects: [],
  slideID: "1",
  slideBackground: defaultSlideBackground,
};

const minPage: Page = {
  slides: [defaultSlideInfo],
  slideHistory: {
    lastSave: [defaultSlideInfo],
  },
  selection: {
    slideID: "1",
  },
  title: "Sample Presentation",
};

//  сделать url как отдельный блок

console.log(minPage);

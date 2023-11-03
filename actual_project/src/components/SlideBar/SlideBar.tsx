import "./SlideBar.css";
import Slide from "../Slide/Slide.tsx";
import { Slide as TSlide } from "../../types/types.ts";

type SlideBarProps = {
  selectSlides: TSlide[];
  slides: TSlide[];
};

function SlideBar({ selectSlides, slides }: SlideBarProps) {
  return (
    <div className="slide-bar">
      {slides.length > 0 &&
        slides.map((slide, index) => (
          <div key={slide.id} className="slide-bar__element">
            <div className="slide-bar__index">{index + 1}</div>
            <div className="slide-bar__wrapper">
              <Slide
                isSelectedSlide={selectSlides.includes(slide)}
                slide={slide}
                className="slide-bar__slide"
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default SlideBar;
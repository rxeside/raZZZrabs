import "./Slide.css";
import Block from "../common/Block/Block.tsx";
import { CSSProperties } from "react";
import { Slide as TSlide } from "../../model/main.ts";
import classNames from "classnames";

type SlideProps = {
  slide: TSlide;
  isSelectedSlide: boolean;
  className?: string;
};

function Slide({ slide, isSelectedSlide, className }: SlideProps) {
  const style: CSSProperties = {
    background: slide.background,
  };

  let classSlideSelect: string = "";
  if (isSelectedSlide) {
    classSlideSelect = "slide__select";
  }

  return (
    <div
      className={classNames("slide", className, classSlideSelect)}
      style={style}
    >
      {slide.objects.map((object) => (
        <Block key={object.id} {...object} />
      ))}
    </div>
  );
}

export default Slide;
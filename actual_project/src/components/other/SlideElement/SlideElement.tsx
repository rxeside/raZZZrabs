import { SlideElement } from '../../../model/main'

type SlideElementProps = {
  content: array;
};

function MenuElement({ text, shortcut }: SlideElementProps) {
  return (
    <span className={"menu-element_body"}>
      <span> {text} </span>
      {shortcut && <span> {shortcut} </span>}
    </span>
  );
}

export default MenuElement;
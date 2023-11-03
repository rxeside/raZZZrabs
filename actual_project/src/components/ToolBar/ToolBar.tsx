import "./ToolBar.css";
import Button from "../other/Button/Button.tsx";
import Input from "../other/Input/Input.tsx";
import Select from "../other/Select/Select.tsx";
import { fontOptions } from "../../constants/ToolBar.ts";

function ToolBar() {
  return (
    <div className="tool-bar">
      <Button icon={"undo"} />
      <Button icon={"redo"} />
      <Button text={"Тема"} />
      <Button icon={"category"} />
      <Button icon={"insert_text"} />
      <Button icon={"image"} />
      <Select options={fontOptions} className={"font__select"} />
      <Button icon={"remove"} />
      <Input defaultValue={11} className={"size-shrift__input"} />
      <Button icon={"add"} />
      <Button icon={"format_bold"} />
      <Button icon={"format_italic"} />
      <Button icon={"format_underlined"} />
    </div>
  );
}

export default ToolBar;
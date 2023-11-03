import "./Editor.css";
import { Page } from "../../model/main.ts";
import SlideBar from "../SlideBar/SlideBar.tsx";
import Workspace from "../Workspace/Workspace.tsx";

type PageProps = {
  page: Page;
};

function Editor({ page }: PageProps) {
  return (
    <div className="editor">
      <SlideBar
        selectSlides={page.selectSlides}
        slides={page.slides}
      />
      <Workspace slide={page.currentSlide} />
    </div>
  );
}

export default Editor;
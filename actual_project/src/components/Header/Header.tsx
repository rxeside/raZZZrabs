import "./Header.css";
import ToolBar from "../ToolBar/ToolBar.tsx";

type HeaderProps = {
  presentationName: string;
};

function Header({ presentationName }: HeaderProps) {
  return (
    <div className="header">
      <ToolBar />
    </div>
  );
}

export default Header;
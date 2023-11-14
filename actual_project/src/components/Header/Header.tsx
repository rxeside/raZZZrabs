import InfoBar from '../InfoBar/InfoBar'
import ToolBar from '../ToolBar/ToolBar'

// type HeaderProps = {
//   presentationName: string;
// };

function Header() {
  return (
    <div className="header">
      <InfoBar />
      <ToolBar />
    </div>
  )
}

export default Header

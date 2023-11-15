import InfoBar from '../InfoBar/InfoBar'
import ToolBar from '../ToolBar/ToolBar'
import Input from '../common/Input/Input'

type HeaderProps = {
  presentationName: string
}

function Header({ presentationName }: HeaderProps) {
  return (
    <div className="header">
      <Input defaultValue={presentationName} />
      <InfoBar />
      <ToolBar />
    </div>
  )
}

export default Header

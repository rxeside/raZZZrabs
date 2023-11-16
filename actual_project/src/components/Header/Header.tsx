import InfoBar from '../InfoBar/InfoBar'
import ToolBar from '../ToolBar/ToolBar'
import Input from '../common/Input/Input'
import './Header.css'

type HeaderProps = {
  presentationName: string
}

function Header({ presentationName }: HeaderProps) {
  return (
    <div className="header">
      <div className="logo-and-name">
        <img
          className={'logo'}
          alt={'logo'}
          src={'../../static/img/logo.svg'}
        />
        <Input
          defaultValue={presentationName}
          className={'presentation-name'}
        />
      </div>
      <InfoBar />
      <ToolBar />
    </div>
  )
}

export default Header

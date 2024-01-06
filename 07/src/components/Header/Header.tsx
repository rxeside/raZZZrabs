import InfoBar from '../InfoBar/InfoBar'
import ToolBar from '../ToolBar/ToolBar'
import classes from './Header.module.css'
import { ImageBlock, ShapeBlock, TextBlock } from '../../model/main'
import { useState } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { DefaultRootState, useSelector } from 'react-redux'
import store from '../../store/store'
import { changePageTitleAction } from '../../store/actionCreators'

type HeaderProps = {
  presentationName: string
  selectedObject: TextBlock | ImageBlock | ShapeBlock | null
}

function Header({ presentationName, selectedObject }: HeaderProps) {
  const page: DefaultRootState = useSelector((state) => state)
  const [title, setTitle] = useState(page.title)

  return (
    <div className={classes.header}>
      <div className={classes.logoAndName}>
        <img
          className={classes.logo}
          alt={'logo'}
          src={'../../static/img/logo.svg'}
        />
        <input
          value={title}
          defaultValue={presentationName}
          className={classes.presentationName}
          onChange={(event) => {
            setTitle(event.target.value)
            store.dispatch(changePageTitleAction(event.target.value))
          }}
        />
      </div>
      <InfoBar />
      <ToolBar selectedObject={selectedObject} />
    </div>
  )
}

export default Header

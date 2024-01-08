import { CSSProperties, useEffect, useState } from 'react'
import classes from './AddImage.module.css'
import store from '../../store/store'
import {
  addBackImageElementAction,
  addImageElementAction,
} from '../../store/actionCreators'
import Button from '../common/Button/Button'
import ColorPicker from '../ColorPicker/ColorPicker'

interface AddImageProps {
  x: number
  y: number
  isHidden: boolean
  isBack?: boolean
  onClose: () => void
}

export function AddImage({
  isHidden,
  x,
  y,
  onClose,
  isBack = false,
}: AddImageProps) {
  const [position, setPosition] = useState({ top: 0, left: 0 })

  useEffect(() => {
    setPosition({ top: y, left: x })
  }, [x, y])

  const style: CSSProperties = {
    position: 'absolute',
    top: `${position.top}px`,
    left: `${position.left}px`,
    display: isHidden ? 'none' : 'block',
    width: '200px',
    padding: '0px 0px 20px 20px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    textAlign: 'left',
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const imageData = reader.result as string
        if (!isBack) {
          store.dispatch(addImageElementAction(imageData))
        } else {
          store.dispatch(addBackImageElementAction(imageData))
        }
      }

      reader.readAsDataURL(file)
      onClose()
    }
    onClose()
  }

  const [url, setUrl] = useState({ data: '' })

  const handleImageURLUpload = () => {
    if (!isBack) {
      store.dispatch(addImageElementAction(url.data))
    } else {
      store.dispatch(addBackImageElementAction(url.data))
    }
    onClose()
  }

  return (
    <div style={style}>
      {isBack && (
        <div>
          <div className={classes.fileInputContainer}>
            <ColorPicker
              isElement={false}
              isStroke={false}
              className={classes.customFileInput}
            />
            <p className={classes.titleUpload}>Задать цвет</p>
          </div>
        </div>
      )}
      <div className={classes.fileInputContainer}>
        <input
          type="file"
          onChange={handleImageUpload}
          className={classes.customFileInput}
        />
        <p className={classes.titleUpload}>Загрузить с компьютера</p>
      </div>
      <div>
        <input
          value={url.data}
          onChange={(event) => {
            setUrl({ data: String(event.target.value) })
          }}
          className={classes.titleUploadURL}
          placeholder={'Вставьте URL'}
        />
        <Button icon={'upload'} onClick={handleImageURLUpload} />
      </div>
    </div>
  )
}

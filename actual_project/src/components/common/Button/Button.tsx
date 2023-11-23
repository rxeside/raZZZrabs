import { MouseEventHandler } from 'react'
import './Button.css'

type ButtonProps = {
  text?: string
  icon?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function Button({ text, icon, onClick }: ButtonProps) {
  const isIconButton = (icon && !text) != undefined
  const isTextButton = (text && !icon) != undefined

  function setClassName(isIconButton: boolean, isTextButton: boolean) {
    if (isIconButton) {
      return 'button__icon'
    }
    if (isTextButton) {
      return 'button__text'
    }
    return ''
  }

  return (
    <button
      type="button"
      className={setClassName(isIconButton, isTextButton)}
      onClick={onClick}
    >
      {isIconButton && (
        <img
          className="button__icon material-symbols-outlined"
          src={'../../static/img/' + icon + '.svg'}
          alt={icon}
        ></img>
      )}
      {isTextButton && <span className="button__text">{text}</span>}
    </button>
  )
}

export default Button

import { MouseEventHandler } from 'react'
import classes from './Button.module.css'

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
      return classes.buttonIcon
    }
    if (isTextButton) {
      return classes.buttonText
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
          className={classes.buttonIcon + ' ' + classes.materialsymbolsoutlined}
          src={'../../static/img/' + icon + '.svg'}
          alt={icon}
        ></img>
      )}
      {isTextButton && <span className={classes.buttonText}>{text}</span>}
    </button>
  )
}

export default Button

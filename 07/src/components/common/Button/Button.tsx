import { MouseEventHandler } from 'react'
import classes from './Button.module.css'

type ButtonProps = {
  text?: string
  icon?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  title?: string
  id?: string
}

function Button({ text, icon, onClick, title, id }: ButtonProps) {
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
      title={title}
      id={id}
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

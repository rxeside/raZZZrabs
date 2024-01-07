import {
  BorderType,
  ColorType,
  HorizontalAlignType,
  OutlineType,
  Size,
  VerticalAlignType,
} from '../../../model/main'
import TextAria from '../TextAria/TextAria'
import { CSSProperties } from 'react'

type TextProps = {
  data: {
    value: string
    color: ColorType
    fontSize: number
    fontFamily: string
    verticalAlign: VerticalAlignType
    horizontalAlign: HorizontalAlignType
    outline: OutlineType
    border?: BorderType
    size: Size
  }
}

function Text({ data }: TextProps) {
  const style: CSSProperties = {
    color: data.color.hex,
    fontSize: data.fontSize,
    fontStyle: data.outline.italic ? 'italic' : '',
    fontWeight: data.outline.bold ? 'bold' : '',
    textDecoration: data.outline.underline ? 'underline' : '',
    fontFamily: data.fontFamily,
    textAlign:
      data.horizontalAlign === 'left'
        ? 'left'
        : data.horizontalAlign === 'center'
        ? 'center'
        : data.horizontalAlign === 'right'
        ? 'right'
        : undefined,
  }
  return (
    <TextAria
      placeholder={'Ведите текст'}
      className={'text'}
      value={data.value}
      style={style}
    ></TextAria>
  )
}

export default Text

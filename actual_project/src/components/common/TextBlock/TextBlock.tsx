import {
  BorderType,
  ColorType,
  HorizontalAlignType,
  OutlineType,
  Size,
  VerticalAlignType,
} from '../../../model/main'
import TextAria from '../TextAria/TextAria'

type TextProps = {
  data: {
    value: string
    color: ColorType
    fontSize: number
    verticalAlign: VerticalAlignType
    horizontalAlign: HorizontalAlignType
    outline: OutlineType
    border?: BorderType
    size: Size
  }
}

function Text({ data }: TextProps) {
  return (
    <TextAria
      placeholder={'Ведите текст'}
      className={'text'}
      value={data.value}
    ></TextAria>
  )
}

export default Text

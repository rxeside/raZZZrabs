import {
  BorderType,
  ColorType,
  HorizontalAlignType,
  OutlineType,
  Size,
  VerticalAlignType,
} from '../../../model/main'
import Input from '../Input/Input'

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
  return <Input defaultValue={data.value} className={'text'}></Input>
}

export default Text

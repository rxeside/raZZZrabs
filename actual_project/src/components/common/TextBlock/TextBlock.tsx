import {
  BorderType,
  ColorType,
  HorizontalAlignType,
  OutlineType,
  Size,
  VerticalAlignType,
} from '../../../model/main'

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
  return <span>{data.value}</span>
}

export default Text

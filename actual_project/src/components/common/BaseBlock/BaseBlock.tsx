import './BaseBlock.css'
import { CSSProperties } from 'react'
import {
  ElementType,
  ImageBlock,
  ShapeBlock,
  TextBlock,
} from '../../../model/main'
import Image from '../ImageBlock/ImageBlock'
import Shape from '../ShapeBlock/ShapeBlock'
import Text from '../TextBlock/TextBlock'

type BlockProps = TextBlock | ImageBlock | ShapeBlock

function BaseBlock({ startDot, size, elementType, data }: BlockProps) {
  const style: CSSProperties = {
    left: startDot.x,
    top: startDot.y,
    height: size.height,
    width: size.width,
  }

  return (
    <div className="block" style={style}>
      {elementType === ElementType.IMAGE && <Image data={data.image} />}
      {elementType === ElementType.SHAPE && <Shape data={data} />}
      {elementType === ElementType.TEXT && <Text data={data} />}
    </div>
  )
}

export default BaseBlock

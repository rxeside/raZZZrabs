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

type BlockProps = (TextBlock | ImageBlock | ShapeBlock) & {
  elementSelect?: string
}

function BaseBlock({
  startDot,
  size,
  elementType,
  data,
  scale = 1,
  id,
  elementSelect,
}: BlockProps) {
  const newHeight: number = scale * size.height
  const newWidth: number = scale * size.width

  const style: CSSProperties = {
    left: startDot.x,
    top: startDot.y,
    height: newHeight,
    width: newWidth,
    transform: 'scale(' + scale + ')',
    outline: elementSelect === id ? '2px solid rgb(0 146 192 / 100%)' : 0,
    overflow: 'hidden',
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

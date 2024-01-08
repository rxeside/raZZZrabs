import './BaseBlock.css'
import React, { CSSProperties, useRef, useState } from 'react'
import {
  ElementType,
  ImageBlock,
  ShapeBlock,
  TextBlock,
  BaseBlock as BaseBlockType,
} from '../../../model/main'
import Image from '../ImageBlock/ImageBlock'
import Shape from '../ShapeBlock/ShapeBlock'
import Text from '../TextBlock/TextBlock'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { DefaultRootState, useSelector } from 'react-redux'
import store from '../../../store/store'
import {
  selectElementAction,
  updateObjectRectAction,
} from '../../../store/actionCreators'
import { CornerView } from '../../CornerView/CornerView'
import { useDragAndDrop } from '../../../hooks/useDragAndDrop'

type BlockProps = (TextBlock | ImageBlock | ShapeBlock) & {
  index: number
}

function BaseBlock({
  startDot,
  size,
  elementType,
  data,
  scale = 1,
  id,
}: BlockProps) {
  const page: DefaultRootState = useSelector((state) => state)

  const newHeight: number = scale * size.height
  const newWidth: number = scale * size.width

  const style: CSSProperties = {
    left: startDot.x,
    top: startDot.y,
    height: newHeight,
    width: newWidth,
    transform: 'scale(' + scale + ')',
    outline:
      page.selection.elementID === id ? '2px solid rgb(0 146 192 / 100%)' : 0,
  }

  const slideCur =
    page.slides.find(
      (slide: { slideID: any }) => slide.slideID === page.selection.slideID,
    ) || null

  const selected =
    slideCur.slideObjects.find(
      (obj: { id: any }) =>
        obj.id === page.selection.elementID && obj.id === id,
    ) || null

  const isSelected = selected != null

  const rectRef = useRef<HTMLDivElement>(null)
  const [rectCoords, setRectCoords] = useState({
    x: startDot.x * scale,
    y: startDot.y * scale,
  })

  const rect: BaseBlockType = {
    startDot: rectCoords,
    id: id,
    size: size,
    scale: scale,
  }

  React.useEffect(() => {
    setRectCoords({
      x: startDot.x * scale,
      y: startDot.y * scale,
    })
  }, [startDot, scale])

  useDragAndDrop(
    {
      coords: rectCoords,
      setNewCoords: setRectCoords,
    },
    {
      ref: rectRef,
      isSelected: isSelected,
      needUpdate: true,
    },
    (newX: number, newY: number) => {
      store.dispatch(
        updateObjectRectAction(id, {
          ...rect,
          startDot: { x: newX, y: newY },
        }),
      )
    },
  )

  data.size = size

  return (
    <div
      className="block"
      style={style}
      onClick={() => store.dispatch(selectElementAction(id))}
      draggable={'false'}
      ref={rectRef}
    >
      {isSelected && (
        <div>
          <CornerView
            rect={{
              ...rect,
              startDot: {
                x: rectCoords.x,
                y: rectCoords.y,
              },
            }}
            objectId={id}
            type={'LeftTop'}
            visibility={isSelected}
            parentRef={rectRef}
          />
          <CornerView
            rect={{
              ...rect,
              startDot: {
                x: rectCoords.x,
                y: rectCoords.y,
              },
            }}
            objectId={id}
            type={'LeftBottom'}
            visibility={isSelected}
            parentRef={rectRef}
          />
          <CornerView
            rect={{
              ...rect,
              startDot: {
                x: rectCoords.x,
                y: rectCoords.y,
              },
            }}
            objectId={id}
            type={'RightTop'}
            visibility={isSelected}
            parentRef={rectRef}
          />
          <CornerView
            rect={{
              ...rect,
              startDot: {
                x: rectCoords.x,
                y: rectCoords.y,
              },
            }}
            objectId={id}
            type={'RightBottom'}
            visibility={isSelected}
            parentRef={rectRef}
          />
        </div>
      )}
      {elementType === ElementType.IMAGE && <Image data={data.image} />}
      {elementType === ElementType.SHAPE && <Shape data={data} />}
      {elementType === ElementType.TEXT && <Text data={data} />}
    </div>
  )
}

export default BaseBlock

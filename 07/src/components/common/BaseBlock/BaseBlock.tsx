import './BaseBlock.css'
import { CSSProperties, useEffect, useRef } from 'react'
import {
  ElementType,
  ImageBlock,
  ShapeBlock,
  TextBlock,
} from '../../../model/main'
import Image from '../ImageBlock/ImageBlock'
import Shape from '../ShapeBlock/ShapeBlock'
import Text from '../TextBlock/TextBlock'
import { RegisterDndItemFn } from '../../../hooks/useDraggableElement'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { DefaultRootState, useSelector } from 'react-redux'
import store from '../../../store/store'
import { selectElementAction } from '../../../store/actionCreators'

type BlockProps = (TextBlock | ImageBlock | ShapeBlock) & {
  registerDndItem?: RegisterDndItemFn | null
  index: number
}

function BaseBlock({
  startDot,
  size,
  elementType,
  data,
  scale = 1,
  id,
  registerDndItem,
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
    overflow: 'hidden',
  }

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (page.selection.elementID === id) {
      if (registerDndItem) {
        const { onDragStart } = registerDndItem(
          {
            elementRef: ref,
            controlRef: ref,
          },
          startDot.y,
          startDot.x,
        )
        const stopDefAction = (evt: MouseEvent) => {
          evt.preventDefault()
        }

        const onMouseDown = (mouseDownEvent: MouseEvent) => {
          onDragStart({
            onDrag: (dragEvent: MouseEvent) => {
              stopDefAction(dragEvent)
              stopDefAction(mouseDownEvent)
              ref.current!.style.position = 'relative'
              ref.current!.style.zIndex = '1'
              ref.current!.style.boxShadow = 'black 2px 2px 4px'
              ref.current!.style.top = `${
                dragEvent.clientY - mouseDownEvent.clientY + startDot.y
              }px`
              ref.current!.style.left = `${
                dragEvent.clientX - mouseDownEvent.clientX + startDot.x
              }px`
            },
            onDrop: () => {
              ref.current!.style.position = ''
              ref.current!.style.zIndex = ''
              ref.current!.style.boxShadow = ''
              ref.current!.style.top = ''
              ref.current!.style.left = ''
            },
          })
        }

        const control = ref.current!
        control.addEventListener('mousedown', onMouseDown)
        return () => control.removeEventListener('mousedown', onMouseDown)
      }
    }
  }, [id, page.selection.elementID, registerDndItem, startDot.x, startDot.y])

  return (
    <div
      className="block"
      style={style}
      onClick={() => store.dispatch(selectElementAction(id))}
      ref={page.selection.elementID === id ? ref : undefined}
    >
      {elementType === ElementType.IMAGE && <Image data={data.image} />}
      {elementType === ElementType.SHAPE && <Shape data={data} />}
      {elementType === ElementType.TEXT && <Text data={data} />}
    </div>
  )
}

export default BaseBlock

import './BaseBlock.css'
import { CSSProperties, useContext, useEffect, useRef } from 'react'
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
import { PageContext } from '../../../context/page'
import { start } from 'repl'

type BlockProps = (TextBlock | ImageBlock | ShapeBlock) & {
  elementSelect?: string | null
  onSelectElement: (elementID: string) => void | null
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
  elementSelect,
  onSelectElement,
  registerDndItem,
  index,
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

  const { page } = useContext(PageContext)

  const ref = useRef<HTMLDivElement>(null)
  const dndControlRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // TODO: эту логику перемещения можно вынести в отдельный компонент, div, который сможет отрисовывать в себе любой контент
    if (registerDndItem) {
      const { onDragStart } = registerDndItem(
        index,
        {
          elementRef: ref,
          controlRef: dndControlRef,
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
            // TODO: можно вынести в стили и использовать как-то так ref.current!.classList.add(styles.dragging) либо через useState
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

      const control = dndControlRef.current!
      control.addEventListener('mousedown', onMouseDown)
      return () => control.removeEventListener('mousedown', onMouseDown)
    }
  }, [index, registerDndItem])

  const style2: CSSProperties = {
    height: '10%',
    width: '10%',
    outline: elementSelect === id ? '2px solid rgb(0 146 192 / 100%)' : 0,
  }

  return (
    <div
      className="block"
      style={style}
      onClick={() => onSelectElement(id)}
      ref={ref}
    >
      <div style={style2} ref={dndControlRef}></div>
      {elementType === ElementType.IMAGE && <Image data={data.image} />}
      {elementType === ElementType.SHAPE && <Shape data={data} />}
      {elementType === ElementType.TEXT && <Text data={data} />}
    </div>
  )
}

export default BaseBlock

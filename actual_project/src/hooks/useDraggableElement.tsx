import { RefObject, useCallback, useRef } from 'react'

type DndItemInfo = {
  elementRef: RefObject<HTMLDivElement>
  controlRef: RefObject<HTMLDivElement>
}

type OnDragStartFn = (args: {
  onDrag: (event: MouseEvent) => void
  onDrop: (event: MouseEvent) => void
}) => void

type RegisterDndItemFn = (
  index: number,
  dndItemInfo: DndItemInfo,
  startY: number,
  startX: number,
) => {
  onDragStart: OnDragStartFn
}

type UseDraggableElementParams = {
  onOrderChange: (toY: number, toX: number) => void
}

function useDraggableElement({ onOrderChange }: UseDraggableElementParams) {
  const itemsRef = useRef<Array<DndItemInfo>>([])

  const registerDndItem = useCallback(
    (
      index: number,
      dndItemInfo: DndItemInfo,
      startY: number,
      startX: number,
    ) => {
      const item = {
        ...dndItemInfo,
        startY: startY,
        startX: startX,
      }
      itemsRef.current[index] = item

      const onDragStart: OnDragStartFn = ({ onDrag, onDrop }) => {
        item.startY = item.elementRef.current!.getBoundingClientRect().top
        item.startX = item.elementRef.current!.getBoundingClientRect().left

        const onMouseUp = (event: MouseEvent) => {
          onOrderChange(
            startY + event.clientY - item.startY,
            startX + event.clientX - item.startX,
          )
          onDrop(event)

          window.removeEventListener('mousemove', onDrag)
          window.removeEventListener('mouseup', onMouseUp)
        }

        window.addEventListener('mousemove', onDrag)
        window.addEventListener('mouseup', onMouseUp)
      }

      return {
        onDragStart,
      }
    },
    [onOrderChange],
  )

  return {
    registerDndItem,
  }
}

export { useDraggableElement }

export type { DndItemInfo, RegisterDndItemFn }

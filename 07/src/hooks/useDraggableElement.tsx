import { RefObject, useCallback } from 'react'

type DndItemInfo = {
  elementRef: RefObject<HTMLDivElement>
  controlRef: RefObject<HTMLDivElement>
}

type OnDragStartFn = (args: {
  onDrag: (event: MouseEvent) => void
  onDrop: (event: MouseEvent) => void
}) => void

type RegisterDndItemFn = (
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
  const registerDndItem = useCallback(
    (dndItemInfo: DndItemInfo, startY: number, startX: number) => {
      const item = {
        ...dndItemInfo,
        startY: startY,
        startX: startX,
      }

      const onDragStart: OnDragStartFn = ({ onDrag, onDrop }) => {
        item.startY = item.elementRef.current!.getBoundingClientRect().top
        item.startX = item.elementRef.current!.getBoundingClientRect().left

        const stopDefAction = (evt: MouseEvent) => {
          evt.preventDefault()
        }

        const onMouseUp = (event: MouseEvent) => {
          stopDefAction(event)

          const deltaX = event.clientX - item.startX
          const deltaY = event.clientY - item.startY

          console.log(deltaY, deltaX)

          onDrop(event)

          onOrderChange(startY + deltaY, startX + deltaX)

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

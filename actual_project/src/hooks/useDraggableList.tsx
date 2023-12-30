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
) => {
  onDragStart: OnDragStartFn
}

type UseDraggableListParams = {
  onOrderChange: (fromIndex: number, toIndex: number) => void
}

function useDraggableList({ onOrderChange }: UseDraggableListParams) {
  const itemsRef = useRef<Array<DndItemInfo>>([])

  const registerDndItem = useCallback(
    (index: number, dndItemInfo: DndItemInfo) => {
      const item = {
        ...dndItemInfo,
        startY: 0,
      }
      itemsRef.current[index] = item
      console.log(itemsRef.current)
      console.log('useLength = ' + itemsRef.current.length)
      console.log('useIndex = ' + index)
      const onDragStart: OnDragStartFn = ({ onDrag, onDrop }) => {
        item.startY = item.elementRef.current!.getBoundingClientRect().top

        const onMouseUp = (event: MouseEvent) => {
          let newIndex = index
          const draggableItemTop =
            item.elementRef.current!.getBoundingClientRect().top
          for (let i = 0; i < itemsRef.current.length; ++i) {
            if (i === index) {
              continue
            }
            const currItem = itemsRef.current[i].elementRef.current!
            if (
              (currItem.getBoundingClientRect().top < draggableItemTop &&
                i > index) ||
              (currItem.getBoundingClientRect().top > draggableItemTop &&
                i < index)
            ) {
              newIndex = i
            }
          }
          onOrderChange(index, newIndex)
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

export { useDraggableList }

export type { DndItemInfo, RegisterDndItemFn }

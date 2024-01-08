import React, { MutableRefObject, useState } from 'react'
import { BaseBlock } from '../model/main'
import { CornerType } from '../components/CornerView/CornerView'
import { Coords, useDragAndDrop } from './useDragAndDrop'

interface ViewParams {
  cornerRef: MutableRefObject<HTMLDivElement | null>
  objectRef: MutableRefObject<HTMLDivElement | null>
  isSelected: boolean
  cornerType: CornerType
}

export function useResize(view: ViewParams, rect: BaseBlock, onEnd: Function) {
  const [cornerCoords, setCornerCoords] = useState({ x: 0, y: 0 })
  const [newRect, setNewRect] = useState({ ...rect })

  const updateCornerStyle = (
    ref: MutableRefObject<HTMLDivElement | null>,
    cornerType: CornerType,
  ) => {
    if (ref.current)
      if (cornerType === 'LeftTop') {
        ref.current.style.left = '-4px'
        ref.current.style.top = '-4px'
      } else if (cornerType === 'LeftBottom') {
        ref.current.style.left = '-4px'
        ref.current.style.bottom = '-4px'
      } else if (cornerType === 'RightTop') {
        ref.current.style.right = '-4px'
        ref.current.style.top = '-4px'
      } else if (cornerType === 'RightBottom') {
        ref.current.style.right = '-4px'
        ref.current.style.bottom = '-4px'
      }
  }

  const calcFromLeftTopCorner = (
    oldRect: BaseBlock,
    delta: Coords,
  ): BaseBlock => {
    return {
      ...oldRect,
      startDot: {
        x: oldRect.startDot.x + delta.x,
        y: oldRect.startDot.y + delta.y,
      },
      size: {
        width: oldRect.size.width - delta.x,
        height: oldRect.size.height - delta.y,
      },
    }
  }

  const calcFromLeftBottomCorner = (
    oldRect: BaseBlock,
    delta: Coords,
  ): BaseBlock => {
    return {
      ...oldRect,
      startDot: {
        x: oldRect.startDot.x + delta.x,
        y: oldRect.startDot.y,
      },
      size: {
        width: oldRect.size.width - delta.x,
        height: oldRect.size.height + delta.y,
      },
    }
  }

  const calcFromRightTopCorner = (
    oldRect: BaseBlock,
    delta: Coords,
  ): BaseBlock => {
    return {
      ...oldRect,
      startDot: {
        x: oldRect.startDot.x,
        y: oldRect.startDot.y + delta.y,
      },
      size: {
        width: oldRect.size.width + delta.x,
        height: oldRect.size.height - delta.y,
      },
    }
  }

  const calcFromRightBottomCorner = (
    oldRect: BaseBlock,
    delta: Coords,
  ): BaseBlock => {
    return {
      ...oldRect,
      size: {
        width: oldRect.size.width + delta.x,
        height: oldRect.size.height + delta.y,
      },
    }
  }

  const calculateNewRect = (
    cornerType: CornerType,
    oldRect: BaseBlock,
    delta: Coords,
  ): BaseBlock => {
    if (cornerType === 'LeftTop') {
      return calcFromLeftTopCorner(oldRect, delta)
    } else if (cornerType === 'LeftBottom') {
      return calcFromLeftBottomCorner(oldRect, delta)
    } else if (cornerType === 'RightTop') {
      return calcFromRightTopCorner(oldRect, delta)
    } else if (cornerType === 'RightBottom') {
      return calcFromRightBottomCorner(oldRect, delta)
    } else {
      return oldRect
    }
  }

  useDragAndDrop(
    {
      coords: cornerCoords,
      setNewCoords: setCornerCoords,
    },
    {
      ref: view.cornerRef,
      isSelected: view.isSelected,
      needUpdate: false,
    },
    (newX: number, newY: number) => {
      onEnd(calculateNewRect(view.cornerType, rect, { x: newX, y: newY }))
      return
    },
  )

  React.useLayoutEffect(() => {
    if (view.objectRef.current && view.cornerRef.current) {
      updateCornerStyle(view.cornerRef, view.cornerType)
      view.objectRef.current.style.left = `${newRect.startDot.x}px`
      view.objectRef.current.style.top = `${newRect.startDot.y}px`
      view.objectRef.current.style.width = `${newRect.size.width}px`
      view.objectRef.current.style.height = `${newRect.size.height}px`
    }
  }, [newRect, setNewRect])

  React.useEffect(() => {
    setNewRect(calculateNewRect(view.cornerType, rect, cornerCoords))
  }, [cornerCoords, setCornerCoords])
}

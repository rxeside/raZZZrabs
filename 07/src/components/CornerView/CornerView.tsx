import React, { MutableRefObject, useRef } from 'react'
import { Rect, Selection } from '../../model/main'
import styles from './RectView.module.css'
import { Dispatch } from 'redux'
import store from '../../store/store'
import { updateObjectRect } from '../../model/SlidesMaker'
import { useResize } from '../../hooks/useResize'

export type CornerType = 'LeftTop' | 'LeftBottom' | 'RightTop' | 'RightBottom'

interface CornerViewProps {
  rect: Rect
  objectId: Selection
  visibility: boolean
  type: CornerType
  parentRef: MutableRefObject<HTMLDivElement | null>
}

export function CornerView(props: CornerViewProps) {
  const cornerRef = useRef<HTMLDivElement>(HTMLDivElement.prototype)
  let style
  if (props.type === 'LeftTop') {
    style = styles.rectDotLeftTop
  } else if (props.type === 'LeftBottom') {
    style = styles.rectDotLeftBottom
  } else if (props.type === 'RightTop') {
    style = styles.rectDotRightTop
  } else if (props.type === 'RightBottom') {
    style = styles.rectDotRightBottom
  }
  useResize(
    {
      cornerRef: cornerRef,
      objectRef: props.parentRef,
      isSelected: props.visibility,
      cornerType: props.type,
    },
    props.rect,
    (newRect: Rect) => {
      store.dispatch(updateObjectRect, {
        objectId: props.objectId,
        newRect: newRect,
      })
    },
  )

  return <div className={style} ref={cornerRef} />
}

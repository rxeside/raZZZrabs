import React, { MutableRefObject, useRef } from 'react'
import { BaseBlock } from '../../model/main'
import classes from './CornerView.module.css'
import store from '../../store/store'
import { useResize } from '../../hooks/useResize'
import { updateObjectRectAction } from '../../store/actionCreators'

export type CornerType = 'LeftTop' | 'LeftBottom' | 'RightTop' | 'RightBottom'

interface CornerViewProps {
  rect: BaseBlock
  objectId: string
  visibility: boolean
  type: CornerType
  parentRef: MutableRefObject<HTMLDivElement | null>
}

export function CornerView(props: CornerViewProps) {
  const cornerRef = useRef<HTMLDivElement>(HTMLDivElement.prototype)
  let style
  if (props.type === 'LeftTop') {
    style = classes.rectDotLeftTop
  } else if (props.type === 'LeftBottom') {
    style = classes.rectDotLeftBottom
  } else if (props.type === 'RightTop') {
    style = classes.rectDotRightTop
  } else if (props.type === 'RightBottom') {
    style = classes.rectDotRightBottom
  }
  useResize(
    {
      cornerRef: cornerRef,
      objectRef: props.parentRef,
      isSelected: props.visibility,
      cornerType: props.type,
    },
    props.rect,
    (newRect: BaseBlock) => {
      store.dispatch(updateObjectRectAction(props.objectId, newRect))
    },
  )

  return <div className={style} ref={cornerRef} />
}

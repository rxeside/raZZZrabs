import { BorderType, ColorType, PrimitiveType, Size } from '../../../model/main'
import { CSSProperties } from 'react'

type PrimitiveProps = {
  data: {
    primitiveType: PrimitiveType
    color: ColorType
    border?: BorderType
    size: Size
  }
}

function calculateTriangleCoordinates(width: number, height: number): string {
  const x1 = width / 2
  const y1 = 0
  const x2 = 0
  const y2 = height
  const x3 = width
  const y3 = height

  return `${x1},${y1} ${x2},${y2} ${x3},${y3}`
}

function Primitive({ data }: PrimitiveProps) {
  const { size, primitiveType } = data
  const centerX = size.width / 2
  const centerY = size.height / 2

  const style: CSSProperties = {
    opacity: data.color.opacity,
  }

  return (
    <svg width={size.width} height={size.height}>
      <g>
        {primitiveType === 'circle' && (
          <ellipse
            cx={centerX}
            cy={centerY}
            rx={size.width / 2}
            ry={size.height / 2}
            style={style}
            fill={data.color.hex}
          />
        )}
        {primitiveType === 'rectangle' && (
          <rect
            x={0}
            y={0}
            width={size.width}
            height={size.height}
            style={style}
            fill={data.color.hex}
          />
        )}
        {primitiveType === 'triangle' && (
          <polygon
            points={calculateTriangleCoordinates(size.width, size.height)}
            style={style}
            fill={data.color.hex}
          />
        )}
      </g>
    </svg>
  )
}

export default Primitive

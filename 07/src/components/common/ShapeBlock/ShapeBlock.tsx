import { BorderType, ColorType, PrimitiveType, Size } from '../../../model/main'

type PrimitiveProps = {
  data: {
    primitiveType: PrimitiveType
    color: ColorType
    border?: BorderType
    strokeColor: string
    strokeWidth: number
    size: Size
  }
}

function calculateTriangleCoordinates(width: number, height: number): string {
  const x1 = (width + 3) / 2
  const y1 = 0 + 3
  const x2 = 0 + 3
  const y2 = height + 3
  const x3 = width + 3
  const y3 = height + 3

  return `${x1},${y1} ${x2},${y2} ${x3},${y3}`
}

function Primitive({ data }: PrimitiveProps) {
  const { size, primitiveType } = data
  const centerX = size.width / 2
  const centerY = size.height / 2

  return (
    <svg
      width={size.width + data.strokeWidth + 10}
      height={size.height + data.strokeWidth + 10}
    >
      <g>
        {primitiveType === 'circle' && (
          <ellipse
            cx={centerX}
            cy={centerY}
            rx={size.width / 2}
            ry={size.height / 2}
            fill={data.color.hex}
            stroke={data.strokeColor}
            strokeWidth={data.strokeWidth}
          />
        )}
        {primitiveType === 'rectangle' && (
          <rect
            x={0}
            y={0}
            width={size.width}
            height={size.height}
            fill={data.color.hex}
            stroke={data.strokeColor}
            strokeWidth={data.strokeWidth}
          />
        )}
        {primitiveType === 'triangle' && (
          <polygon
            points={calculateTriangleCoordinates(size.width, size.height)}
            fill={data.color.hex}
            stroke={data.strokeColor}
            strokeWidth={data.strokeWidth}
          />
        )}
      </g>
    </svg>
  )
}

export default Primitive

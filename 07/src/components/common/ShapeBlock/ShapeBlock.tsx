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

const scale = 1.2
const baseGap = 15

function calculateTriangleCoordinates(width: number, height: number): string {
  const x1 = (width + baseGap) / 2
  const y1 = baseGap
  const x2 = baseGap
  const y2 = height + baseGap
  const x3 = width + baseGap
  const y3 = height + baseGap

  return `${x1},${y1} ${x2},${y2} ${x3},${y3}`
}

function Primitive({ data }: PrimitiveProps) {
  const { size, primitiveType } = data
  const centerX = size.width / 2
  const centerY = size.height / 2

  return (
    <svg
      width={(size.width + data.strokeWidth) * scale}
      height={(size.height + data.strokeWidth) * scale}
    >
      <g>
        {primitiveType === 'circle' && (
          <ellipse
            cx={centerX + data.strokeWidth}
            cy={centerY + data.strokeWidth}
            rx={size.width / 2}
            ry={size.height / 2}
            fill={data.color.hex}
            stroke={data.strokeColor}
            strokeWidth={data.strokeWidth}
          />
        )}
        {primitiveType === 'rectangle' && (
          <rect
            x={data.strokeWidth}
            y={data.strokeWidth}
            width={size.width}
            height={size.height}
            fill={data.color.hex}
            stroke={data.strokeColor}
            strokeWidth={data.strokeWidth}
          />
        )}
        {primitiveType === 'triangle' && (
          <polygon
            points={calculateTriangleCoordinates(
              size.width + data.strokeWidth,
              size.height + data.strokeWidth,
            )}
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

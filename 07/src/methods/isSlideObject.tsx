/*!ОСТОРОЖНО! ПРИМЕНЯЕТСЯ ?НАСЛЕДОВАНИЕ?*/
export interface ISlideObject {
  // I - interface
  id: string
  width: number
  height: number
  x: number
  y: number
}

function isSlideObject(object: any): object is ISlideObject {
  const hasId = typeof object.id === 'string'
  const hasWidth = typeof object.width === 'number'
  const hasHeight = typeof object.height === 'number'
  const hasX = typeof object.x === 'number'
  const hasY = typeof object.y === 'number'

  return hasId && hasWidth && hasHeight && hasX && hasY
}

export { isSlideObject }

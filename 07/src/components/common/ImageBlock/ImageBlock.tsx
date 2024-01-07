import { ImageTypeVariation } from '../../../model/main'
import classes from './ImageBlock.module.css'

type ImageProps = {
  data: {
    data: string
    type: ImageTypeVariation
  }
}

function Image({ data }: ImageProps) {
  return (
    <img
      src={data.data}
      alt={data.data}
      draggable={'false'}
      className={classes.picture}
    />
  )
}

export default Image

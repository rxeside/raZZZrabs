import { ImageTypeVariation } from '../../../model/main'

type ImageProps = {
  data: {
    data: string
    type: ImageTypeVariation
  }
}

function Image({ data }: ImageProps) {
  return <img src={data.data} alt={data.data} />
}
export default Image

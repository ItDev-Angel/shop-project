import {useParams} from 'react-router-dom'

type Props = {}

const ProductPage = (props: Props) => {
  const { id } = useParams()
  return (
    <div>productPage</div>
  )
}

export default ProductPage
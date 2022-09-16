import {Product} from 'components/Products/productsArray'

type Props = {
  productCount: number
  product: Product
}

const ProductListItem = ({productCount, product}: Props) => {
  return (
    <div>
      {product.name} : {productCount}
    </div>
  )
}

export default ProductListItem
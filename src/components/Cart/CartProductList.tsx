import {keys} from 'lodash'
import CartProductListItem from './ProductListItem'
import {useAppSelector} from 'redux/hooks'
import productsArray, {getProductsObject, Product} from 'components/Products/productsArray'

type ProductsObject = {
  [key:number]:Product
}

type Props = {
  productsInCart:{
    [id:number]:number
  }
  productsObject?:{[id:number]:Product}
  CartItem?:any
}

const CartProductList = ( {
  productsInCart,
  productsObject = getProductsObject(productsArray),
  CartItem = CartProductListItem,
}: Props) => {

  // const productsArray = useAppSelector((state) => state.products)
  // const productsObject:ProductsObject = getProductsObject(productsArray)

  return (
    <>
      {keys(productsInCart).map((productId) => (
      <CartItem
        key={productId}
        product={productsObject[parseInt(productId)]}
        productCount={productsInCart[parseInt(productId)]}
        />
      ))}
    </>
  )
}

export default CartProductList
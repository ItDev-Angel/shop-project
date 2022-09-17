import {keys} from 'lodash'
import productsArray, {getProductsObject, Product} from 'components/Products/productsArray'
import {useAppSelector} from 'redux/hooks'

type ProductsObject = {
  [key:number]:Product
}

type Props = {
  productsInCart:{
    [id:number]:number
  },
  productsObject?:{[id:number]:Product}
}

const CartTotal = ({productsInCart,productsObject = getProductsObject(productsArray),}: Props) => {
  // const productsArray = useAppSelector((state) => state.products)
  // const productsObject:ProductsObject = getProductsObject(productsArray)

  return (
    <div>
      <div>Total $ 
        {keys(productsInCart).reduce(
        (total, productId) => 
        total + 
        productsObject[parseInt(productId)].price * 
        productsInCart[parseInt(productId)] , 0)
        }
      </div> 
    </div>
  )
}
export default CartTotal
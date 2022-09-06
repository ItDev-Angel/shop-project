/* eslint-disable @typescript-eslint/no-unused-vars */
import {keys} from 'lodash'
import productsArray, {getProductsObject, Product} from 'components/Products/productsArray'
import CartTotal from '../Cart/CartTotal'
import CartProductList from '../Cart/CartProductList'
type Props = {
  productsInCart:{[id:number]:number}
  productsObject?:{[id:number]:Product}
}

const CardHeader = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
}: Props) => {

  return (
    <>
    <CartProductList productsInCart={{}} />  
    <CartTotal productsInCart={productsInCart}/>
    </>
  )
}

export default CardHeader
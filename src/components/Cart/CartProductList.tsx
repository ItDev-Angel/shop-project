import React from 'react'
import {keys} from 'lodash'
import productsArray, {getProductsObject, Product} from 'components/Products/productsArray'
import CartProductListItem from './ProductListItem'

type Props = {
  productsInCart:{[id:number]:number}
  productsObject?:{[id:number]:Product}
  CartItem?:any
  removeProductFromCart?:(id:number) => void
  changeProductQuantity?:(id:number,count:number) => void
}

const CartProductList = ( {
  productsInCart,
  productsObject = getProductsObject(productsArray),
  CartItem = CartProductListItem,
  removeProductFromCart,
  changeProductQuantity
}: Props) => {
  return (
    <>
      {keys(productsInCart).map((productId) => (
      <CartItem
        key={productId}
        product={productsObject[parseInt(productId)]}
        productCount={productsInCart[parseInt(productId)]}
        removeProductFromCart={removeProductFromCart}
        changeProductQuantity={changeProductQuantity}
        />
      ))}
    </>
  )
}

export default CartProductList
import React from 'react'
import {keys} from 'lodash'
import productsArray, {getProductsObject, Product} from 'components/Products/productsArray'
import CartProductListItem from './ProductListItem'

type Props = {
  productsInCart:{[id:number]:number}
  productsObject?:{[id:number]:Product}
  CartItem?:any
  removeProductFromCart?:(id:number) => void
}

const CartProductList = ( {
  productsInCart,
  productsObject = getProductsObject(productsArray),
  CartItem = CartProductListItem,
  removeProductFromCart
}: Props) => {
  return (
    <>
      {keys(productsInCart).map((productId) => (
      <CartItem
        key={productId}
        product={productsObject[parseInt(productId)]}
        productCount={productsInCart[parseInt(productId)]}
        removeProductFromCart={removeProductFromCart}
        />
      ))}
    </>
  )
}

export default CartProductList
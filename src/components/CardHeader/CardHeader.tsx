import React from 'react'
import {keys} from 'lodash'
import productsArray, {getProductsObject, Product} from 'components/Products/productsArray'
type Props = {
  productsInCart:{[id:number]:number}
  productsOoject?:{[id:number]:Product}
}

const CardHeader = ({
  productsInCart,
  productsOoject = getProductsObject(productsArray)
}: Props) => {

  return (
    <div>
      {keys(productsInCart).map((productId) => (
        <div key={productId}>
          {productsOoject[parseInt(productId)].name}:
          {productsInCart[parseInt(productId)]}
        </div>
        ))}
      
    </div>
  )
}

export default CardHeader
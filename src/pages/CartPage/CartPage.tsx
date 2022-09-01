import {keys} from 'lodash'
import productsArray, {getProductsObject, Product} from 'components/Products/productsArray'
import { Grid, Typography } from '@mui/material'

type Props = {
  productsInCart:{[id:number]:number}
  productsObject?:{[id:number]:Product}
}

const CartPage = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
}: Props) => {

  return (
    <div>
      <Typography variant="h4" textAlign="center" margin={3}>
                <div>Cart List</div>
      </Typography>
      {keys(productsInCart).map((productId) => (
        <div key={productId}>
          {productsObject[parseInt(productId)].name}:{''}
          {productsInCart[parseInt(productId)]}:{''}
          {productsObject[parseInt(productId)].price}
        </div>
        ))}
      <div>Total $ 
        {keys(productsInCart).reduce(
        (total, productId) => 
        total + 
        productsObject[parseInt(productId)].price * 
        productsInCart[parseInt(productId)] ,0)
        }:{''}
      </div> 
    </div>
  )
}

export default CartPage
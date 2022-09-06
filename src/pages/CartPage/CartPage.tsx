import CartTotal from '../../components/Cart/CartTotal'
import {Grid} from '@mui/material'
import CartProductList from 'components/Cart/CartProductList'
import CartProductListItemExtended from 'components/Cart/CartProductListItemExtended'

type Props = {
  productsInCart:{[id:number]:number}
  removeProductFromCart:(id:number) => void
}

const CartPage = ({productsInCart, removeProductFromCart}: Props) => {

  return (
    <div 
    style={{
      padding:'30px 0',
    }}>
      <Grid container spacing={4}>
        <CartProductList
        productsInCart={productsInCart}
        CartItem={CartProductListItemExtended}
        removeProductFromCart={removeProductFromCart}
        />
      </Grid>
      <CartTotal productsInCart={productsInCart}/>
    </div>
  )
}

export default CartPage
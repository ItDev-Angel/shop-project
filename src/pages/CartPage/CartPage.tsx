import CartTotal from '../../components/Cart/CartTotal'
import {Grid} from '@mui/material'
import CartProductList from 'components/Cart/CartProductList'
import {useAppSelector} from 'redux/hooks'
import { Link } from 'react-router-dom'
import CartProductListItemExtended from 'components/Cart/CartProductListItemExtended'

type Props = {}

const CartPage = () => {
  const productsInCart = useAppSelector(state => state.productsInCart)
  return (
    <div 
    style={{
      padding:'30px 0',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Grid container spacing={4}>
        <CartProductList
        productsInCart={productsInCart}
        CartItem={CartProductListItemExtended}
        />
      </Grid>
      <CartTotal productsInCart={productsInCart}/>
      <Link to="/checkout">Procces to checkout</Link>
    </div>
  )
}

export default CartPage
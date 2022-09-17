import CartTotal from '../Cart/CartTotal'
import CartProductList from '../Cart/CartProductList'
import {useAppSelector} from 'redux/hooks'

const CardHeader = () => {
const productsInCart = useAppSelector(state => state.productsInCart)
  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 20,
    }}
    >
    <CartProductList productsInCart={productsInCart} />  
    <CartTotal productsInCart={productsInCart}/>
    </div>
  )
}

export default CardHeader
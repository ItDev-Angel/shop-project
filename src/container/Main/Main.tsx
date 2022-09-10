import {Container} from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import ProductsList from 'components/Products/ProductsList'
import CartPage from 'pages/CartPage/CartPage'
import Reviews from 'components/Reviews/Reviews'

type Props = {
  productsLikeState:{[id:number]:boolean}
  productsInCart:{[id:number]:number}
  changeProductQuantity:(id:number, count:number) => void
  addProductToCart:(id:number, count:number) => void
  removeProductFromCart:(id:number) => void
  changeProductLike:(id:number) => void
}

const Main = ({
  addProductToCart, 
  productsInCart, 
  removeProductFromCart,
  changeProductQuantity,
  productsLikeState,
  changeProductLike,
}: Props) => {
  return (
    <> 
    <Container>
      <Routes>
        <Route path="/" element={
          <>
            <ProductsList 
            addProductToCart={addProductToCart}
            productsLikeState={productsLikeState}
            changeProductLike={changeProductLike}
            />
            <Reviews/>
          </>
          
        }
        />
        <Route path="cart" element={
          <CartPage 
          removeProductFromCart={removeProductFromCart}
          productsInCart={productsInCart}
          changeProductQuantity={changeProductQuantity}/>
        }
        />
      </Routes>
    </Container>
    </>
  )
}

export default Main
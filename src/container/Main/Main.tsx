import {Container} from '@mui/material'
import {Route, Routes} from 'react-router-dom'
import ProductsList from 'components/Products/ProductsList'
import CartPage from 'pages/CartPage/CartPage'
import Reviews from 'components/Reviews/Reviews'
import ProductPage from 'pages/ProductPage/ProductPage'
import CheckoutPage from 'pages/CheckoutPage/CheckoutPage'

type Props = {}

const Main = () => {
  return (
    <> 
    <Container>
      <Routes>
        <Route path="/" element={
          <>
            <ProductsList />
            <Reviews/>
          </>
        }
        />
        <Route path="cart" element={<CartPage/>}/>
        <Route path="checkout" element={<CheckoutPage/>}/>
        <Route path=":id" element={<ProductPage/>}/>
      </Routes>
    </Container>
    </>
  )
}

export default Main
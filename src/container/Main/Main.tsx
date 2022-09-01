import {Container} from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
import { Route, Routes } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'

type Props = {
  addProductToCart:(id:number, count:number) => void
  productsInCart:{[id:number]:number}
}

const Main = ({addProductToCart, productsInCart}: Props) => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={
          <ProductsList addProductToCart={addProductToCart}/>
        }/>
        <Route path="cart" element={
          <CartPage productsInCart={productsInCart}/>
        }/>
      </Routes>
    </Container>
  )
}

export default Main
import {Container} from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
type Props = {
  addProductToCart:(id:number, count:number) => void
}

const Main = ({addProductToCart}: Props) => {
  return (
    <Container>
      <ProductsList addProductToCart={addProductToCart}/>
    </Container>
  )
}

export default Main
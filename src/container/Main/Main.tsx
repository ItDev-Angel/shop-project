import {Container} from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
type Props = {}

const Main = (props: Props) => {
  return (
    <Container>
      <ProductsList/>
    </Container>
  )
}

export default Main
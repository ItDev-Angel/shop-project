import {Grid, Card, CardContent, Button} from '@mui/material'
import {Product} from 'components/Products/productsArray'
import DeleteIcon from '@mui/icons-material/Delete';
import Quantity from '../Quantity/Quantity'

type Props = {
  id: number
  addProductToCart:(id:number, count:number) => void
  productCount: number
  product:Product,
  removeProductFromCart:(id:number) => void
  changeProductQuantity: (id:number, count:number) => void
}

const CartProductListItemExtended = ({productCount, product, removeProductFromCart,changeProductQuantity, id, addProductToCart}: Props) => {
  return (
    <Grid item xs={12} sm={6}>
      <Card>
        <CardContent>
        <div
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        <img
                            src={product.image}
                            alt=""
                            style={{
                                width: '150px',
                                height: 'auto',
                            }}
                        />
                    </div>
                    <div>{product.name}</div>
                    <p>Price: {product.price}</p>
                    <p>Count: {productCount}</p>
                    <Quantity
                    count={productCount}
                    onDecrementClick={()=>
                      productCount === 1
                      ? removeProductFromCart(product.id)
                      : changeProductQuantity(product.id, productCount -1)}
                      onIncrementClick={()=>
                        changeProductQuantity(product.id, productCount +1)}
                    />
                    <Button 
                    variant="outlined" 
                    onClick={()=> removeProductFromCart(product.id)}>
                        <DeleteIcon />
                    </Button>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default CartProductListItemExtended
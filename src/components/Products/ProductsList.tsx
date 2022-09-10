import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from './productsArray'

type Props = {
    productsLikeState:{[id:number]:boolean}
    addProductToCart:(id:number, count:number) => void
    changeProductLike:(id:number) => void
}
type ProductProps = {
    id:number
    name: string
    description: string
    type:string
    capacity: number
    price:number
    image:string
    category?:string
    
}
const ProductsList = ({
    addProductToCart, 
    productsLikeState,
    changeProductLike,
}: Props) => {
    return (
        <>
            <Typography variant="h4" textAlign="center" margin={3}>
                <div>Product List</div>
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                {productsArray.filter(
                ({category}:ProductProps) => category === 'Iphone')
                .map(
                ({
                    id,
                    name,
                    description,
                    type,
                    capacity,
                    price,
                    image,
                }:ProductProps) =>(
                <Grid item xs={12} sm={6} md={4} key={id}>
                    <ProductsListItem
                            id={id}
                            name={name}
                            description={description}
                            capacity={capacity}
                            type={type}
                            price={price}
                            image={image} 
                            addProductToCart={addProductToCart} 
                            isLiked={productsLikeState[id]}
                            changeProductLike={changeProductLike}
                    />
                </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ProductsList
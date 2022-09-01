/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from './productsArray'

type Props = {
    addProductToCart:(id:number, count:number) => void
}
type ProductProps = {
    id:number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}

const ProductsList = ({addProductToCart}: Props) => {
    return (
        <>
            <Typography variant="h4" textAlign="center" margin={3}>
                <div>ProductList</div>
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                {productsArray.map(
                    ({
                    id,
                    image,
                    name,
                    description,
                    capacity,
                    type,
                    price, 
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
                    />
                </Grid>))}
            </Grid>
        </>
    )
}

export default ProductsList

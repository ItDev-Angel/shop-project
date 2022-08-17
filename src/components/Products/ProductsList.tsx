/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from './productsArray'
import {PropsProduct} from './ProductsListItem'

type Props = {}

const ProductsList = (props: Props) => {
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
                {productsArray.map(({id,image,name,description,capacity,type,price}:PropsProduct) =>(
                <Grid item xs={12} sm={6} md={4} key={id}>
                    <ProductsListItem
                        name={name}
                        description={description}
                        capacity={capacity}
                        type={type}
                        price={price}
                        image={image}
                    />
                </Grid>))}
            </Grid>
        </>
    )
}

export default ProductsList

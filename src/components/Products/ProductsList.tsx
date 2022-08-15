import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'

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
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        name="iPhone"
                        description="description iphone"
                        capacity={64}
                        type="phone"
                        price={500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        name="iPhone xs"
                        description="description iphone xs"
                        capacity={128}
                        type="phone"
                        price={800}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItem
                        name="iPhone x"
                        description="description iphone x"
                        capacity={256}
                        type="phone"
                        price={1500}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList

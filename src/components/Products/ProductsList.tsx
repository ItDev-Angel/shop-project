import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import { useAppSelector } from 'redux/hooks'
import productsArray from 'components/Products/productsArray'

type ProductProps = {
    id:number
    name: string
    description: string
    type:string
    capacity: number
    price:number
    image:string
}
const ProductsList = () => {
    const productsArray = useAppSelector(state => state.products)

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
                {productsArray.map(
                ({
                    id,
                    name,
                    description,
                    type,
                    capacity,
                    price,
                    image,
                }:ProductProps) => (
                <Grid item xs={12} sm={6} md={4} key={id}>
                    <ProductsListItem
                            id={id}
                            name={name}
                            description={description}
                            capacity={capacity}
                            type={type}
                            price={price}
                            image={image} 
                    />
                </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ProductsList
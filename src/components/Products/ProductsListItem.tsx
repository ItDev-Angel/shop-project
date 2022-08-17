import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'

export type PropsProduct = {
    id?:number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}

const ProductsListItem = ({name,image, description, type, capacity, price}: PropsProduct) => {
    return (
        <Card>
            <CardContent>
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
                <h4 className="product-title">{name}</h4>
                <div className="product-description">{description}</div>
                <div className="product-features">{capacity}</div>
                <div className={`product-features`}>{type}</div>
                <div className="product-price">{price}</div>
            </CardContent>

            <CardActions className="btn-wraper">
                <Button variant="contained">Add to Cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem

import React from 'react'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'
type PropsProduct = {
  name: string
  description: string
  type: string
  capacity: number
  price: number
}

const ProductsListItem = ({name, description, type, capacity, price}: PropsProduct) => {
    return (
        <Card>
            <CardContent>
                <h4 className="product-title">{name}</h4>
                <div className="product-description">{description}</div>
                <div className="product-features">{capacity}</div>
                <div className={`product-features red`}>{type}</div>
                <div className="product-price">{price}</div>
            </CardContent>

            <CardActions>
                <Button variant="contained">Add to Cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem

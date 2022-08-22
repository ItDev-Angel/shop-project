import React, { Component } from 'react'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductsListItem.scss'

export type PropsProduct = {
    id?: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}

type State = {
    count: number
}

class ProductsListItem extends Component <PropsProduct, State> {
    state = { count:100,}

    onDecrementClick() {
        this.setState((prevState:State) => ({
            count:prevState.count -1,
        }))
    }
    render() {
        const {image,name,description,capacity,type,price} = this.props
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
                    <div className="product-quantity">
                        <Button variant="contained" onClick={()=>this.onDecrementClick()}>-</Button>
                        <TextField size="small" value={this.state.count} variant="outlined" />
                        <Button variant="contained">+</Button>
                    </div>
                </CardContent>

                <CardActions className="btn-wraper">
                    <Button variant="contained">Add to Cart</Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProductsListItem

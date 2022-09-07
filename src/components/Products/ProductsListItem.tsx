import {useState} from 'react'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'
import Quantity from '../Quantity/Quantity'

export type PropsProduct = {
    id?: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}
type ProductProps = {
    id:number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
    category?: string
    addProductToCart:(id:number, count:number) => void
}

const ProductsListItem = ({ id, name,image, description, type, capacity, price, addProductToCart, category}: ProductProps) => {
    const [count, setCount] = useState<number>(1)
    const onIncrementClick = () => setCount((prevState:number)=>prevState +1)
    const onDecrementClick = () => setCount((prevState:number)=>prevState -1)
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
                <div className="product-category">{category}</div>
                <Quantity 
                count={count}
                onDecrementClick={onDecrementClick}
                onIncrementClick={onIncrementClick}
                />
            </CardContent>

            <CardActions className="btn-wraper">
                <Button 
                variant="outlined"
                onClick={() => addProductToCart(id, count)}
                >Add to Cart</Button>
            </CardActions> 
        </Card>
    )
}

export default ProductsListItem

import React, {useState} from 'react'
import { Button, Card, CardActions, CardContent, TextField } from '@mui/material'
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
    const [count, setCount] = useState<number>(1)
    const [color, setColor] = useState<string>("red")
    const onChangeClick = () => setColor((prevState:string)=>(prevState === "green"?"red":"green"))
    const onIncrementClick = () => setCount((prevState:number)=>prevState +1)
    const onDecrementClick = () => setCount((prevState:number)=>prevState -1)
    return (
        <Card>
            <CardContent>
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
                <h4 className={`product-title ${color}`}>{name}</h4>
                <div className="product-description">{description}</div>
                <div className="product-features">{capacity}</div>
                <div className={`product-features`}>{type}</div>
                <div className="product-price">{price}</div>
                <div className="product-quantity">
                    <Button variant="contained" onClick={onDecrementClick}>-</Button>
                    <TextField size="small" value={count} variant="outlined"/>
                    <Button variant="contained" onClick={onIncrementClick}>+</Button>
                </div>
                <p>Color: {color}</p>
                <Button onClick={onChangeClick}>Change color</Button>
            </CardContent>

            <CardActions className="btn-wraper">
                <Button variant="contained">Add to Cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem

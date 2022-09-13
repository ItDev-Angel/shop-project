import { useState} from 'react'
import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'
import Quantity from '../Quantity/Quantity'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import {useAppSelector, useAppDispatch} from 'redux/hooks'
import {removeLike, addLike} from 'redux/likeReducer'

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
    changeProductLike:(id:number) => void
}

const ProductsListItem = ({ 
    id, 
    name,
    image, 
    description, 
    type, 
    capacity, 
    price, 
    addProductToCart, 
    category,
}: ProductProps) => {
    const [count, setCount] = useState<number>(1)

    const isLiked = useAppSelector(state => state.productsLikeState[id])
    const dispatch = useAppDispatch()
    const onIncrementClick = () => setCount((prevState:number)=>prevState +1)
    const onDecrementClick = () => setCount((prevState:number)=>prevState -1)
    
    return (
        <Card>
            <CardContent>
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
                <Button 
                variant="outlined"
                onClick={()=>
                    isLiked 
                    ? dispatch(removeLike(id))
                    : dispatch(addLike(id))
                } 
                >
                {isLiked ? <FavoriteIcon/>:<FavoriteBorderIcon/> || <FavoriteIcon /> }
                </Button>
                <h4 className="product-title">{name}</h4>
                <div className="product-description">{description}</div>
                <div className="product-features">{capacity} gb</div>
                <div className={`product-features`}>{type}</div>
                <div className="product-price">${price}</div>
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
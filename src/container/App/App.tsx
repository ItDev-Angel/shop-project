import {useState} from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { StyledEngineProvider } from '@mui/material'
import {omit} from 'lodash'

type ProductsInCartProps = {
    [id:number]:number
}
type ProductsLikeStateProps = {
    [id:number]:boolean
}

const App = () => {
    const [productsInCart, setProductsInCart] = 
    useState<ProductsInCartProps>
    ({
        1: 1,
        2: 1,
    })
    
    const [productsLikeState, setProductsLikeState] = 
    useState<ProductsLikeStateProps>
    ({
        1: false,
        2: false,
    })

    const addProductToCart = (id:number,count:number) => {
        setProductsInCart((prevState:ProductsInCartProps) =>({
            ...prevState,
            [id]:(prevState[id] || 0)+ count,
        }))
    }
    const changeProductLike = (id:number) => {
        setProductsLikeState((prevState:ProductsLikeStateProps)=>({
            ...prevState,
            [id]:!prevState[id] 
        })) 
    }
    
    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState: ProductsInCartProps) => 
        omit(prevState,[id]))
    }

    const changeProductQuantity = (id:number,count:number) => {
        setProductsInCart((prevState: ProductsInCartProps) =>({
            ...prevState,
            [id]:count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart}/>
            <Main 
            addProductToCart={addProductToCart} 
            productsInCart={productsInCart}
            removeProductFromCart={removeProductFromCart}
            changeProductQuantity={changeProductQuantity}
            productsLikeState={productsLikeState}
            changeProductLike={changeProductLike}
            />
        </StyledEngineProvider>
            
        
    )
}
export default App
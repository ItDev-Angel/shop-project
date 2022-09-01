/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { StyledEngineProvider } from '@mui/material'

type ProductsInCartProps = {
    [id:number]:number
}

const App = () => {
    
    const [productsInCart, setProductsInCart] = useState<ProductsInCartProps>
    ({
        1: 1,
        2: 1,
    })

    const addProductToCart = (id:number,count:number) => {
        setProductsInCart((prevState:ProductsInCartProps) =>({
            ...prevState,
            [id]:(prevState[id] || 0)+ count,
        }))
        }
        
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart}/>
            <Main addProductToCart={addProductToCart}/>
        </StyledEngineProvider>
            
        
    )
}
export default App
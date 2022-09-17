import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { StyledEngineProvider } from '@mui/material'
import { useAppDispatch } from 'redux/hooks'
import { useEffect } from 'react'
import { fetchProducts } from 'redux/productsReducer'

const App = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Main />
        </StyledEngineProvider>
    )
}

export default App
import {Container, AppBar, Toolbar, IconButton, Typography} 
from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from 'components/Menu/Menu'
import CardHeader from 'components/CardHeader/CardHeader'
type Props = {
    productsInCart:{[id:number]:number}
}

const Header = ({productsInCart}: Props) => {
    return (
    <AppBar position="static" sx={{ backgroundColor:'red'}}>
            <Container>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Fake shop
                    </Typography>
                        <Menu />
                        <CardHeader productsInCart={productsInCart}/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
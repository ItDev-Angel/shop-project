import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

type Props = {}

const Header = (props: Props) => {
  return (
    <AppBar position="static">
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
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </Container>
        </AppBar>
  )
}

export default Header
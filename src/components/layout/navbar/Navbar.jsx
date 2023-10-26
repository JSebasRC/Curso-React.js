import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  createTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";
// import { display } from "@mui/system";
const pages = ["comida", "cocteles"];
const settings = ["Perfil", "Mi Cuenta", "Pedidos", "Cerrar Sesión"];

const theme = createTheme({
  palette: {
    color0: {
      main: "#21130d",
    },
    color1: {
      main: "#fafafa",
    },
  },
});

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar theme={theme} position="sticky" color="color0">
      <Container maxWidth="xl">
        <Toolbar className="toolbar" justifyContent="space-between">
          {/* imagen header desktop */}
          <Link to="/" className="toolbar_img">
            <img
              src="https://res.cloudinary.com/dtfwp778q/image/upload/v1695881804/niurtcx0pin4vmrkwnhx.webp"
              alt="logotipo del sitio"
            />
          </Link>
          {/* Menu desplegable mobile */}
          <Box className="menuHamburguesa">
            <IconButton
              theme={theme}
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="color1"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link to={`/`}>
                <Typography textAlign="center">Todo</Typography>
              </Link>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={`/category/${page}`}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* imagen header desktop */}
          <Link to="/" className="toolbar_img-mobile">
            <img
              src="https://res.cloudinary.com/dtfwp778q/image/upload/v1695881804/niurtcx0pin4vmrkwnhx.webp"
              alt="logotipo del sitio"
            />
          </Link>
          {/* menu items header desktop */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link to={`/`}>
              <Button
                sx={{
                  my: 2,
                  ml: 2,
                  color: "white",
                  display: "block",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                }}
                textAlign="center"
              >
                Todo
              </Button>
            </Link>

            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  ml: 2,
                  color: "white",
                  display: "block",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                }}
              >
                <Link to={`/category/${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://res.cloudinary.com/dtfwp778q/image/upload/v1695881616/q8wlurywrlrm0i5rbp5z.png"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

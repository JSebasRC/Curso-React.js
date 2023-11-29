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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
// const pages = ["comida", "cócteles", "tragos"];
const settings = ["Perfil", "Mi Cuenta", "Pedidos", "Cerrar Sesión"];

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

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection).then((res) => {
      let arrayCategories = res.docs.map((category) => {
        return { ...category.data(), id: category.id };
      });
      setCategories(arrayCategories);
    });
  });
  return (
    <AppBar position="sticky" className="appBar">
      <Container maxWidth="xl">
        <Toolbar className="toolbar">
          {/* imagen header desktop */}
          <Link to="/" className="toolbar_img">
            <img
              src="https://res.cloudinary.com/dtfwp778q/image/upload/v1695881804/niurtcx0pin4vmrkwnhx.webp"
              alt="logotipo del sitio"
            />
          </Link>
          {/* Menu desplegable mobile */}
          <Box className="boxMenuHamburguesa">
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              className="menuHamburguesa"
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
                <Button style={{ paddingLeft: "1rem" }}>Todo</Button>
              </Link>
              {categories.map((category) => (
                <MenuItem key={category.id} onClick={handleCloseNavMenu}>
                  <Typography>
                    <Link to={category.path}>{category.name}</Link>
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
              gap: 2,
              display: { xs: "none", md: "flex" },
              color: "white",
            }}
          >
            <Link to={`/`}>
              <Button>Todo</Button>
            </Link>

            {categories.map((category) => (
              <Button key={category.id} onClick={handleCloseNavMenu} sx={{}}>
                <Link to={category.path}>{category.name}</Link>
              </Button>
            ))}
          </Box>
          {/* MENU PERFIL */}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
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

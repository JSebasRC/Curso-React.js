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
// import { display } from "@mui/system";
const pages = ["Para comer", "Para Tomar", "Promos"];
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
    <AppBar theme={theme} position="static" color="color0">
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              overflow: "hidden",
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              width: 200,
              height: 100,
            }}
          >
            <img
              src="https://res.cloudinary.com/dtfwp778q/image/upload/v1695881804/niurtcx0pin4vmrkwnhx.webp"
              alt="logotipo del sitio"
            />
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              mx: 2,
              overflow: "hidden",
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              width: 100,
              height: 90,
            }}
          >
            <img
              src="https://res.cloudinary.com/dtfwp778q/image/upload/v1695881804/niurtcx0pin4vmrkwnhx.webp"
              alt="logotipo del sitio"
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
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
                {page}
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

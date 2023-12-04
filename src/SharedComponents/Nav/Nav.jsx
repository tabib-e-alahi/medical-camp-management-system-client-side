import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, NavLink } from "react-router-dom";
import './Nav.css'
import useAuth from "../../hooks/useAuth";
import { Button } from "@mui/material";

import logo from '../../assets/logo .png'

const Nav = () => {
  const {user, loggedOut} = useAuth();
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

  const handleSignOut = () =>{
    loggedOut()
  }

  const navLinks = (
    <>
      <NavLink to="/">Home</NavLink>
      {user && <NavLink to="/dashboard">Dashboard</NavLink>}
      {user && <NavLink to='/available-camps'>Available Camps</NavLink>}
      <NavLink to='/contactUs'>Contact Us</NavLink>
    </>
  );

  return (
    <div>
      <AppBar position="static" className="">
        <Container maxWidth="xl" className=" bg-[#82aac6] lg:bg-[#418bc0]    lg:pt-12 lg:pb-4 text-black font-medium">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img className="w-80" src={logo} alt="" />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                <MenuItem
                  onClick={handleCloseNavMenu}
                  className="flex flex-col "
                >
                  {navLinks}
                </MenuItem>
              </Menu>
            </Box>

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} className='flex justify-center items-center gap-10 text-xl'>
              {navLinks}
            </Box>

            {/* Login btn or picture==================== */}
            <Box className=''  sx={{ flexGrow: 0 }}>
              {
                user ? <Tooltip className="" title="Open settings">
                <IconButton className="" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar className="w-full h-full border-2 border-black " alt="User Image" src={user?.photoURL} />
                </IconButton>
              </Tooltip>
              :
              <Link to='/login'><Button variant="contained" size="large" className="">
              Login
            </Button></Link>
              }
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
                
                  <MenuItem  onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={handleSignOut}>Logout</Typography>
                  </MenuItem>
                
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Nav;
//   {
//     pages.map((page) => (
//       <Button
//         key={page}
//         onClick={handleCloseNavMenu}
//         sx={{ my: 2, color: "white", display: "block" }}
//       >
//         {page}
//       </Button>
//     ));
//   }

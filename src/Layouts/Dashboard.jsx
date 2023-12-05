
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import {
  Add,
  AppRegistration,
  EventAvailable,
  Home,
  ManageAccounts,
  Person2,
} from "@mui/icons-material";
import { Link, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import useOrganizer from "../hooks/useOrganizer";
import HealmetTitle from "../hooks/HealmetTitle";

const drawerWidth = 240;

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [isOrganizer] = useOrganizer()
//   console.log(isOrganizer);

  const drawer = (
    <div>
        <HealmetTitle title='Dashboard'></HealmetTitle>
      <Toolbar />
      <Divider />
        {/* ["Organizer Profile", "Add a camp", "", ""] */}
        {isOrganizer ?
        <List>
            <ListItem>             
                <ListItemIcon><Person2 /></ListItemIcon>
                <Link to='/dashboard/organizer-profile'><ListItemText primary='Organizer Profile' /> </Link>          
            </ListItem>
            <ListItem>             
                <ListItemIcon><Add /></ListItemIcon>
                <Link to='/dashboard/add-a-camp'><ListItemText primary='Add a camp' /></Link>           
            </ListItem>
            <ListItem>             
                <ListItemIcon><ManageAccounts /></ListItemIcon>
                <Link to='/dashboard/manage-camps'><ListItemText primary='Manage Camps' /></Link>           
            </ListItem>
            <ListItem>             
                <ListItemIcon><AppRegistration /></ListItemIcon>
                <Link to='/dashboard/manage-registered-camps'><ListItemText primary='Registered Camps' />  </Link>         
            </ListItem>
            <ListItem>             
                <ListItemIcon><FaUser /></ListItemIcon>
                <Link to='/dashboard/all-users'><ListItemText primary='All users' /></Link>          
            </ListItem>
            <ListItem>             
                <ListItemIcon><FaUser /></ListItemIcon>
                <Link to='/dashboard/add-upcoming-camp'><ListItemText primary='Add UpComing Camps' /></Link>          
            </ListItem>
      </List>
:
<List>
            <ListItem>             
                <ListItemIcon><Person2 /></ListItemIcon>
                <Link to='/dashboard/participant-profile'><ListItemText primary='My Profile' /> </Link>          
            </ListItem>
            <ListItem>             
                <ListItemIcon><Add /></ListItemIcon>
                <Link to='/dashboard/registered-camps'><ListItemText primary='Registered Camps' /></Link>           
            </ListItem>
            <ListItem>             
                <ListItemIcon><ManageAccounts /></ListItemIcon>
                <Link to='/dashboard/payment-history'><ListItemText primary='Payment History' /></Link>           
            </ListItem>
            <ListItem>             
                <ListItemIcon><AppRegistration /></ListItemIcon>
                <Link to='/dashboard/manage-registered-camps'><ListItemText primary='Registered Camps' />  </Link>         
            </ListItem>
            <ListItem>             
                <ListItemIcon><FaUser /></ListItemIcon>
                <Link to='/dashboard/feedback-and-ratings'><ListItemText primary='Feedback And Ratings' /></Link>          
            </ListItem>
      </List>
      }
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home></Home>
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Home" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <EventAvailable></EventAvailable>
            </ListItemIcon>
            <Link to="/available-camps">
              <ListItemText primary="Available Camps" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <div className="w-full" >
        <Outlet></Outlet>
      </div>
    </Box>
  );
};

export default Dashboard;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  Box,
  ListItem,
  ListItemText,
  Container,
 
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Container>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar
          sx={{ justifyContent: "space-between" }}
          className="border-boder"
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className="d-flex align-items-center">
              <Button>
                <Link to="/index-home">

                <img
                  src="https://www.hep2go.com/images/medium-logos/logo-bk.jpg"
                  alt=""
                  width={120}
                  height={47}
                  border={0}
                  />
                  </Link>
              </Button>
              <span className="lin">
              <Link to="/exercise ">  <Button
                  color="inherit"
                  className="li"
                  sx={{ display: { xs: "none", md: "block" } }}
                >
               Exercise 
                </Button></Link> 
              </span>
              <span className="linr">
              <Link to="/my-stuff/profile  ">  <Button
                  color="inherit"
                  className="linr"
                  sx={{ display: { xs: "none", md: "block" } }}
                >
              My Stuff
                </Button></Link> 
              </span>
            </div>
          </Typography>

          <Box
            color="inherit align-items-center justify-content-center"
            style={{ width: "50%" }}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Button
              color="inherit"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              Search
            </Button>
            <input style={{ height: "15px", marginTop: "11px" }}></input>
            <img
              src="https://www.hep2go.com/buttons/mag_glass_bbb.jpg"
              alt=""
            />
          </Box>
        </Toolbar>
        <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
          <List sx={{ width: 250 }} onClick={toggleDrawer}>
            <ListItem button>
              <Link to="/exercise" className="font-23">
                <ListItemText primary="Exercise" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link to="/my-stuff/profile" className="font-23">
                {" "}
                <ListItemText primary="MyStuff" />
              </Link>
            </ListItem>
          </List>
        </Drawer>
        <div
          className="d-flex justify-content-between "
          style={{ padding: "2px 8px 2px 8px" }}
        >
          <div>
            <Link to="/upgrade-others">
            <img src="https://www.hep2go.com/images/gear-icon.jpg" alt="" />
            </Link>
          </div>
          <div>
            {" "}
           <Link to="/login"> <span>Login </span></Link>| <Link to="/sign-up">Signup</Link>
          </div>
        </div>
      </AppBar>
    </Container>
  );
}

export default Navbar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SignUp from "./SignUp";
// import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import authStore from "../Stores/authStore";
import { useState } from "react";
import { Box, Tabs, Link, Tab, Button } from "@material-ui/core";
import Modal from "@mui/material/Modal";
import { observer, Observer } from "mobx-react-lite";

// handleModal = () => {
//   this.setState({modalIsOpen: !this.state.modalIsOpen});
// };

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={"secondary"}>
        {authStore.user === null ? (
          <>
            <SignIn /> <SignUp />
          </>
        ) : (
          <Button 
          variant="contained" 
          onClick={authStore.signOut}
          
          >
            Signout
          </Button>
        )}
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Knights Kitchn
          </Typography>
          {/* <Link to="/signup">
            </Link>
            <Link to="/signin">
            </Link> */}
          {/* <Link to="/"> */}
          {/* </Link> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

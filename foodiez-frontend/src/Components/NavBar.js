import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SignUp from "./SignUp";
// import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import authStore from "../Stores/authStore";
import { Box, Button } from "@material-ui/core";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

// handleModal = () => {
//   this.setState({modalIsOpen: !this.state.modalIsOpen});
// };

function NavBar() {
  return (
    <center>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color={"primary"}
          style={{ backgroundColor: "#64b5f6" }}
          lineHeight="10"
          p="7"
        >


          {!authStore.user ? (
            <>
              
              <SignIn />
              <SignUp />
            </>
          ) : (
            <Button
              variant="contained"
              justify="space-between"
              onClick={authStore.signOut}
            >
              Signout
            </Button>
          )}

          <Toolbar>
            <Link to="">
              <center>
                <Typography
                  variant="h6"
                  component="contained"
                  sx={{ flexGrow: 1 }}
                  align="center"
                  textAlign="center"
                  // style={{ backgroundColor: '#1e88e5' }}
                  color="primary"
                >
                  Knights Kitchn ♞
                </Typography>
              </center>
            </Link>

            {/* <Link to="/signup">
            </Link>
            <Link to="/signin">
            </Link> */}
            {/* <Link to="/"> */}
            {/* </Link> */}
          </Toolbar>
        </AppBar>
      </Box>
    </center>
  );
}

export default observer(NavBar);

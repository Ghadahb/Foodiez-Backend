import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SignUp from "./SignUp";
// import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import authStore from "../Stores/authStore";
import { Box,  Button } from "@material-ui/core";
import { observer } from "mobx-react";

// handleModal = () => {
//   this.setState({modalIsOpen: !this.state.modalIsOpen});
// };

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
      position="static" 
      color={"primary"}
      style={{ backgroundColor: '#64b5f6' }}
      
      >
      
        <SignIn />
        <SignUp />
        

        {!authStore.user ? (

          <>
         {/* <SignIn 
         
         /> 
           
           <SignUp />  */}
             
            
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
          <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1 }}
         
          >
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

export default observer(NavBar);
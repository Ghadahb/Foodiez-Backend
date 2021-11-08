import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { TextField } from "@mui/material";
import { useFormControl } from "@mui/material/FormControl";
import { spacing } from '@mui/system';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "4px solid #000",
  boxShadow: 24,
  p: 7,
  mx: 'auto',
  m: 1,
  

};

// export default function SignUp() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   };

export default function SignUp() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event) =>
      setUser({ ...user, [event.target.name]: event.target.value });

    //   const handleSubmit = (event) => {
    //     event.preventDefault();
    //     //  authStore.singup(user);
    //     handleClose();
    //   };

    return (
      <div>
        <Button onClick={handleOpen}>Sign Up</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          
        >
          <Box sx={style}>
            <Typography 
            id="modal-modal-title" 
            variant="h6" 
            component="h2" 
            textAlign="left"
            lineHeight="8"
            >
            Sign Up
            Create your account.
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                onChange={handleChange}
                label="username"
                variant="outlined"
                color="secondary"
                required
              />
              <TextField
                onChange={handleChange}
                label="password"
                variant="outlined"
                color="secondary"
                required
              />
              <Button 
              type="submit" 
              color="secondary" 
              variant="contained"
              mx="auto"
              display="flex"

              >
                Submit
              </Button>
            </form>
          </Box>
        </Modal>
      </div>
    );
  };


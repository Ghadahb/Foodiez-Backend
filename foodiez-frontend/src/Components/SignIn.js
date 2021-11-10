import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { TextField } from "@mui/material";
import authStore from "../Stores/authStore";
import { observer } from "mobx-react";
import { authStyle } from "../styles";

// REIVEW: Since this styling is used in both Sign and Signup, move to a styles.js file and import it here and in Signup.
// Look at the authStyle import above.
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
  mx: "auto",
  m: 1,
};

function SignIn() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    authStore.signin(user);
    // closeModal();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  return (
    <div>
      <Button onClick={handleOpen} variant={"contained"} color={"secondary"}>
        Sign In
      </Button>
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
            style={{ marginBottom: "20px" }}
          >
            Sign In. Please log-in.
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              // value={user.username}
              label="username"
              name="username"
              variant="outlined"
              color="secondary"
              required
            />
            <TextField
              onChange={handleChange}
              // value={user.password}
              label="password"
              name="password"
              variant="outlined"
              color="secondary"
              required
            />
            <Button
              // onClose={handleClose}
              type="submit"
              color="secondary"
              variant="contained"
              mx="auto"
              display="flex"
              style={{ margin: "4px" }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default observer(SignIn);

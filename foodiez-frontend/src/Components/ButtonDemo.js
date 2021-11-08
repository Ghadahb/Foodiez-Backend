import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function ButtonDemo() {
  return (
    <div>
      <Button variant={"contained"} color={"primary"}>
        SignUp
      </Button>
      <Link to="/">
      <Button
        variant={"contained"}
        color={"primary"}
      >
      
        SignIn
      </Button>
      </Link>
    </div>
  );
}

export default ButtonDemo;

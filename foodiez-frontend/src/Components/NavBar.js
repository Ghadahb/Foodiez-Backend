import React from "react";
import { Link } from "react-router-dom";
import authStore from "../Stores/authStore";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import { observer } from "mobx-react";
import { Button } from "@material-ui/core";


function NavBar() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>

        {authStore.user === null ? (
          <>
            <SignInModal /> <SignUpModal />
          </>
        ) : (
          <Button onClick={authStore.signOut}>
            SignOut
          </Button>
        )
        }
      </header>
    </div>
  );
}

export default observer(NavBar);
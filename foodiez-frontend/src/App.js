// import logo from './logo.svg';
// import './App.css';
import ButtonDemo from "./Components/ButtonDemo";
import { Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import NavBar from "./Components/NavBar";
import SignUp from "./Components/SignUp";


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <h1>{title}</h1> */}
      <Typography variant={"h4"} color={"primary"} align={"center"}>
        "A recipe has no soul. You, as the cook, must bring soul to the recipe."
      </Typography>
      < SignUp />
      
      <ButtonDemo />
    </div>
  );
}

export default observer(App);

// import logo from './logo.svg';
// import './App.css';
import ButtonDemo from "./Components/ButtonDemo";
import { Switch, Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import NavBar from "./Components/NavBar";

import CateList from './Components/CateList'

function App() {
  return (
    <div className="App">
      <NavBar/>

      <CateList/>
      {/* <h1>{title}</h1>
      <Typography variant={"h4"} color={"primary"} align={"center"}>
        "A recipe has no soul. You, as the cook, must bring soul to the recipe."
      </Typography>
      
      <ButtonDemo /> */}

import SignUp from "./Components/SignUp";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";


function App() {
  return (
    <div>
      <NavBar />
      <Typography
        variant={"h4"}
        color={"primary"}
        align={"center"}
        style={{ marginBottom: "50px" }}
      >
        "A recipe has no soul. You, as the cook, must bring soul to the recipe."
      </Typography>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        {/* <Route path="/categories">
        <List
        data={categoryStore.Category}
        title="Categories"
        />
        </Route>
        <Route exact path="/recipes">
          <Recipe />
          </Route> */}
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default observer(App);

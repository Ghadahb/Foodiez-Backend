import { Switch, Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import NavBar from "./Components/NavBar";
import SignUp from "./Components/SignUp";
import { Route } from "react-router";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import CateList from "./Components/CateList";
import CateDetail from "./Components/CateDetail";
import RecipeList from "./Components/RecipeList";
import RecipeCard from "./Components/RecipeCard";
import CategorySearch from "./Components/CategorySearch";
import "./App.css";
import { withStyles } from "@material-ui/core/styles";

function App() {
  return (
    <div>
      <div className="Navbar">
        <NavBar />
      </div>
      {/* <CategorySearch /> */}

      <Typography
        variant={"h4"}
        color={"primary"}
        align={"center"}
        style={{
          marginBottom: "70px",
          marginTop: "100px",
          fontWeight: "bold",
          fontStyle: "italic",
        }}
        // style={{ marginTop: "100px" }}
        // color= "#002984"
        // // fontWeight= "bold"
        // style={{ fontWeight: "bold" }}
      >
        "A recipe has no soul. You, as the cook, must bring soul to the recipe."
      </Typography>
      <Typography
        variant={"h4"}
        color={"primary"}
        align={"center"}
        style={{
          marginBottom: "10px",
          marginTop: "1px",
          fontWeight: "medium",
          fontStyle: "regular",
          fontSize: "16px",
          letterSpacing: "6px",
        }}
      >
        Join Our Community
      </Typography>
      <Home />
      <CateList />
      {/* <RecipeList/> */}

      <Switch>
        {/* <Route exact path="">
        <Home />
        </Route>  */}
        {/* <Route exact path="/category/recipes">
          <CateDetail/>
        </Route> */}
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route path="/category/recipe">
          <RecipeList />
        </Route>
        {/* <Route path="/category">
        <List
        data={categoryStore.Category}
        title="Categories"
        /> */}
        {/* </Route>
        <Route exact path="/recipes">
          <Recipe />
          </Route> */}
      </Switch>
    </div>
  );
}

export default observer(App);

import { Switch, Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import NavBar from "./Components/NavBar";
import SignUp from "./Components/SignUp";
import { Route } from "react-router";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import CateList from "./Components/CateList";
import CateItem from "./Components/CateItem";
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

      <Switch>
        <Route path="/category/:categorySlug">
          <RecipeList />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route path="/cateory/:categorySlug/recipes">
          <RecipeList />
        </Route>
        {/* <Route path="/category/:categorySlug">
          <CateItem />
        </Route> */}
        <Route path="">
          <Home />
          <CateList />
        </Route>
      </Switch>
    </div>
  );
}

export default observer(App);

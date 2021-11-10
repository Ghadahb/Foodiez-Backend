import { Switch, Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import NavBar from "./Components/NavBar";
import SignUp from "./Components/SignUp";
import { Route } from "react-router";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import CateList from "./Components/CateList";
import CateDetail from './Components/CateDetail'
import RecipeList from "./Components/RecipeList";
import RecipeCard from "./Components/RecipeCard";
import CategorySearch from "./Components/CategorySearch"
import "./App.css";

function App() {
  return (
    <div>
      <div className= "Navbar">
      <NavBar />
      </div>
      {/* <CategorySearch /> */}

      <Typography
        variant={"h4"}
        color={"primary"}
        align={"center"}
        style={{ marginBottom: "90px" }}
      >
        "A recipe has no soul. You, as the cook, must bring soul to the recipe."
      </Typography>
      <Home/>
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
          <RecipeList/>
          
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

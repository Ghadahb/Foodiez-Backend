import { observer } from "mobx-react";
import NavBar from "./Components/NavBar";
import SignUp from "./Components/SignUp";
import { Switch, Route } from "react-router";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import CateList from "./Components/CateList";
import RecipeCard from "./Components/RecipeCard";
import CateItem from "./Components/CateItem";

import "./App.css";
import RecipeList from "./Components/RecipeList";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      {/* <RecipeList /> */}
      <CateList />
      <Switch>
      <Route path="/category/recipes/:recipesSlug">
            <RecipeCard />
          </Route>
        <Route path="/category/:categorySlug">
          <CateItem />

        </Route>

        {/* <Route path="/category/recipes">
          <RecipeList />
        </Route> */}

        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </div>
  );
}

export default observer(App);

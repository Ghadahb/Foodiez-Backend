import React, { useState } from "react";
import RecipeModal from "./RecipeModal";
import { observer } from "mobx-react";
import RecipeItem from "./RecipeItem";
import recipeStore from "../Stores/recipeStore";
import { Stack, FormControl } from "@mui/material";

function RecipeList() {
  const recipeList = recipeStore.recipes.map((recipe) => (
    <RecipeItem key={recipe._id} recipe={recipe} />
  ));
  const [query, setQuery] = useState("");

  return (
    <>
      <h1 className="title"> Add Recipe </h1>
      <Stack direction="horizontal" gap={3}>
        <FormControl
          className="m-2"
          placeholder="Search for recipe by name"
          onChange={(event) => setQuery(event.target.value)}
          style={{ marginBottom: "20px" }}
          border="10px"
          style={{ margin: "4px" }}
        />
        <RecipeModal />
       
      </Stack>
      {recipeList}
    </>
  );
}

export default observer(RecipeList);

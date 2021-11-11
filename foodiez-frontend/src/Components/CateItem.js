import React, { useState } from "react";
import CateDetail from "./CateDetail";
import { observer } from "mobx-react";
import cateStores from "../Stores/cateStores";
import { useParams } from "react-router";
import recipeStore from "../Stores/recipeStore";
import RecipeCard from "./RecipeCard";

function CateItem() {
  const { categorySlug } = useParams();
  const category = cateStores.categories.find(
    (category) => category.slug === categorySlug
  );

  return (
    <div>
      {category.name}
      {category.recipes}
    </div>
  );
}

export default observer(CateItem);

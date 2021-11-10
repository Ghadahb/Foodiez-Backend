import React, { useState } from 'react'
import CateDetail from './CateDetail';
import RecipeModal from './RecipeModal';
import { observer } from "mobx-react";
import { Form, Row, Stack } from "react-bootstrap";
import RecipeCard from './RecipeCard';
import recipeStore from '../Stores/recipeStore';


function RecipeList({ recipes }) {
    const [query, setQuery] = useState("");

    const recipeList = recipeStore.recipes
//     .filter((recipe) =>
//     recipe.name.toLowerCase().includes(query.toLowerCase())
// )
.map((recipe) => <RecipeCard key={recipe._id} recipe={recipe} />);

    return (
        <div>
      <h1 className="title"> Add Recipe </h1>
      <Stack direction="horizontal" gap={3}>
        <Form.Control
          className="m-2"
          placeholder="Search for recipe by name"
          onChange={(event) => setQuery(event.target.value)}
        />
        {/* <RecipeModal/> */}
      </Stack>

      <Row>{recipeList}</Row>
    </div>
  );
    };

export default observer(RecipeList);

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import IngredientModal from "./IngredientModal";
import recipeStore from "../Stores/recipeStore";
import { TextField } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
function RecipeModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
  });

  const handleChange = (event) =>
    setRecipe({ ...recipe, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setRecipe({ ...recipe, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    recipeStore.createRecipes(recipe);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Recipe</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Your recipe name"
              name="name"
              type="text"
              variant="outlined"
              color="secondary"
              // value={recipe.name}
              onChange={handleChange}
            />
            <TextField
              label="Image"
              name="image"
              type="file"
              variant="outlined"
              color="secondary"
              onChange={handleImage}
            />
            <TextField
              label="description"
              name="name"
              // value={recipe.description}
              type="text"
              color="secondary"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              label="calories"
              name="name"
              type="number"
              variant="outlined"
              color="secondary"
              // value={recipe.calories}
              onChange={handleChange}
            />
            <Button
              onClose={handleClose}
              type="submit"
              color="secondary"
              variant="contained"
              mx="auto"
              display="flex"
              style={{ margin: "4px" }}
            >
              Add Recipe
            </Button>
            {/* <IngredientModal /> */}
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default RecipeModal;

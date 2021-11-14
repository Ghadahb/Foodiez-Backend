import { makeAutoObservable } from "mobx";
import api from "./api";

class RecipeStore{
  recipes = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchRecipes = async (categoryId) => {
    try {
      const res = await api.get(`/category/:${categoryId}`);
      this.recipes = res.data;
    } catch (error) {
      console.error("catetStore -> fetchrecipes -> error", error);
    }
  };

  createRecipes= async (newRecipe) => {
  
    try {
      const formData = new FormData();
      for (const key in newRecipe) formData.append(key, newRecipe[key]);
      const res = await api.post("/category/:categoryId/recipes", formData);
      this.recipes.push(res.data);

      // const res = await api.post("/recipes", recipes);
      // this.recipes.push(res.data);
    } catch (error) {
      console.log("catetStore -> createrecipes -> error", error);
    }
  };
}
const recipeStore = new RecipeStore();
recipeStore.fetchRecipes();
export default recipeStore;

{/* <Route path="/category/recipes/:recipesSlug">
<RecipeCard />
</Route>
<Route path="/category/:categorySlug">
<CateItem />

</Route> */}

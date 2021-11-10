import { makeAutoObservable } from "mobx";
import api from "./api";

// REVIEW: Don't be lazy with file names, call it `categoryStore.js`
// REVIEW: Don't be lazy with the class name, call it `CategoryStore`

class CateStore {
  categories = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchCategory = async () => {
    try {
      const res = await api.get("/category");
      // REVIEW: Remove console log if done with it
      console.log(res.data);
      this.categories = res.data;
    } catch (error) {
      console.error("catetStore -> fetchcategory -> error", error);
    }
  };

  createCategory = async (category) => {
    try {
      const res = await api.post("/category", category);
      this.categories.push(res.data);
    } catch (error) {
      console.log("catetStore -> createcategory -> error", error);
    }
  };
}
// REVIEW: Don't be lazy with the instance name, call it `categoryStore`
const cateStore = new CateStore();
cateStore.fetchCategory();
export default cateStore;

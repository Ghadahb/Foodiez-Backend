import { makeAutoObservable } from "mobx";
import api from "./api";

class CateStore {
  categories = [];

  constructor() {
    makeAutoObservable(this);
  }




  fetchCategory = async () => {
    try {
        
      const res = await api.get("/category");
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
const cateStore = new CateStore();
cateStore.fetchCategory();
export default cateStore;
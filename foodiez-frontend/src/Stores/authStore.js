import { makeAutoObservable } from "mobx";
import api from "./api";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }


//signout

signOut = () => {
    delete api.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
  };



}






const authStore = new AuthStore();
// authStore.checkForToken();
export default authStore;
import { makeAutoObservable } from "mobx";
import api from "./api";
// REVIEW: You dont need to import React in stores, it's not a component
import React from "react";
import decode from "jwt-decode";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  checkForToken = () => {
    // REVIEW: Remove commented out code if not needed
    // this.user = null
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now(); // give us the current time
      let tempUser = decode(token);
      if (tempUser.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signOut();
      }
    }
  };

  setUser = (token) => {
    localStorage.setItem("myToken", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signup = async (userData) => {
    try {
      const response = await api.post("/signup", userData);
      this.setUser(response.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  signOut = () => {
    delete api.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
    this.user = null;
  };

  signin = async (userData) => {
    try {
      const response = await api.post("/signin", userData);
      this.user = decode(response.data.token);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };
}

const authStore = new AuthStore();
// QUESTION: Why is this commented out?
// authStore.checkForToken();
export default authStore;

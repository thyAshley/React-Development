import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerapp-b32e1.firebaseio.com/",
});

export default instance;

import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-json-server.typicode.com/typicode/demo",
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN from instance";
instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;

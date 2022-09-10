import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-e-clone-26bb4.cloudfunctions.net/api",
});

export default instance;

// https://e-clone-26bb4.web.app

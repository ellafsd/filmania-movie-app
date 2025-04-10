import axios from "axios";

//USE {} TO USE AN OBJECT
const api = axios.create({
    baseURL: "http://127.0.0.1:4090",
});

export default api;
import axios from "axios";

const instance = axios.create();

instance.defaults.baseURL = process.env.REACT_APP_API_URL;

export default instance;

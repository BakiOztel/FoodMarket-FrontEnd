import axios from "axios";

axios.defaults.withCredentials = true;
export const userLoginRequest = async (data) => await axios.post("http://localhost:5000/userLogin", data);
export const userRegisterRequest = async (data) => await axios.post("http://localhost:5000/userRegister", data);
export const userIsLogin = async () => await axios.post("http://localhost:5000/deneme");
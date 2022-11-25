import axios from "axios";

axios.defaults.withCredentials = true;
export const userLoginRequest = (data) => axios.post("http://localhost:5000/userLogin", data);
export const userRegisterRequest = async (data) => await axios.post("http://localhost:5000/userRegister", data).catch(function (error) {
    if (error.response) {
        return error.response.data;
    }
});
export const userIsLogin = () => axios.post("http://localhost:5000/userIsLogin");
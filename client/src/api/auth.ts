import axios from "axios";
import { Userdata, Credentials } from "./interfaces/auth.interfaces";

export const registerRequest = async (userdata: Userdata) => {
  axios
    .post("http://localhost:4000/api/auth/register", userdata)
    .then((res) => {
      console.log(res.data);
    });
};

export const loginRequest = async (credentials: Credentials) => {
  axios
    .post("http://localhost:4000/api/auth/login", credentials)
    .then((res) => {
      console.log(res.data);
    });
};

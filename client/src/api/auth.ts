import axios from "axios";
import { Userdata, Credentials } from "./interfaces/auth.interfaces";

export const registerRequest = async (userdata: Userdata) => {
  return axios.post("http://localhost:4000/api/auth/register", userdata);
};

export const loginRequest = async (credentials: Credentials) => {
  return axios.post("http://localhost:4000/api/auth/login", credentials);
};

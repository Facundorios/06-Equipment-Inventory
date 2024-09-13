import axios from "axios";

export const registerRequest = async (userdata) => {
  axios
    .post("http://localhost:4000/api/auth/register", userdata)
    .then((res) => {
      console.log(res.data);
    });
};

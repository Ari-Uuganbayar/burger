const axios = require("axios");

const instance = () => {
  return axios.create({
    baseURL: "https://burger-6ea58-default-rtdb.firebaseio.com",
  });
};

export default instance;

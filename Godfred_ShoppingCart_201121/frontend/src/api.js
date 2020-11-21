import axios from "axios";
import { apiUrl } from "./config.js";

/*export const getProduct = async (id) => {
  //sending an ajax request
  try {
     const url = `${apiUrl}/api/products/${id}`;
     const response = {
       method: "GET",
       headers: {
         // Accept: "application/json",
         "Content-Type": "application/json;charset=UTF-8",
       },
     };
     await fetch(url, response).then((response) => {
       // console.log(response.status);
     });
    //  const response = await fetch(`${apiUrl}/api/products/${id}`, {
    //   //url: `${apiUrl}/api/products/${id}`,
    //    method: "GET",
    //    headers: {
    //      "Content-Type": "application/json",
    //    },
    //  });
    if (response.statusText !== "OK") {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};*/

export const getProducts = async () => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/products`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.statusText !== "OK") {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/products/${id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.statusText !== "OK") {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
};

import axios from "axios";

export class userServices {
  static users = [];

  static getAllUsers() {
    let data = "https://jsonplaceholder.typicode.com/users";
    return axios.get(data);
  }

  static getProductsData() {
    let data = `https://dummyjson.com/products?skip=5&limit=2`;
    return axios.get(data);
  }
}

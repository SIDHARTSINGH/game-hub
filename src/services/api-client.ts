import axios, { CanceledError } from "axios";
export { CanceledError };

// 1. axios.get() ... post() ... calls will replaced by apiClient.get()... post()... calls
// 2. base url is added by default, just add the end points
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

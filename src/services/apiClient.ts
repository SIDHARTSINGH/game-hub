import axios from "axios";

export interface Response<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "333dfe12cf08409e8f9b30f5725bbda8", // API key
  },
});

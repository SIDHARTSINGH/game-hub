import axios, { AxiosRequestConfig } from "axios";

export interface Response<T> {
  count: number;
  next?: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "333dfe12cf08409e8f9b30f5725bbda8", // API key
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // define as an arrow function so 'this' references the current class
  // wo won't need to bind the function
  getAll = (config: AxiosRequestConfig) => {
    // in the useGames() hook,
    //  we need a config object for passing our query string params to backend
    // we should add that as an optional parameter to this method
    return axiosInstance
      .get<Response<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;

import apiClient from "./api-client";

interface Entity {
  id: number;
}

// 1. create a class for generic HttpService
class HttpService {
  endpoint: string;

  // 2.  Require a endpoint after the base url to create an instance of HttpService
  // Take an endpoint in the constructor and initialize a variable
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // 3. Generic methods

  getAll<T>() {
    const controller = new AbortController();

    // return the promise
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  deleteUser(id: number) {
    return apiClient.delete(this.endpoint + "/" + id);
  }

  create<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  updateUser<T extends Entity>(entity: T) {
    return apiClient.patch(this.endpoint + entity.id, entity);
  }
}

// 4. export default new HttpService( ...requires an endpoint to create and export... ) :
// genericity of the class is compromised :
// so, instead export a function which takes the endpoint and creates a new instance
export const create = (endpoint: string) => new HttpService(endpoint);

import axios, { AxiosRequestConfig } from "axios";

function request(method: string) {
  const baseURL = `${import.meta.env.VITE_API_URL}`;
  console.log("baseURL: ", baseURL);
  return async (url: string, body: object | null) => {
    const requestOptions: AxiosRequestConfig = {
      url: `${baseURL}/${url}`,
      method,
      // headers: authHeader(`${baseURL}/${url}`),
      data: null,
    };
    if (body) {
      requestOptions.data = body;
    }
    return axios(requestOptions);
  };
}

// eslint-disable-next-line import/prefer-default-export
export const api = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};

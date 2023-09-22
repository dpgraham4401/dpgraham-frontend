import axios, { AxiosRequestConfig } from "axios";

function request(method: "GET" | "POST" | "PUT" | "DELETE") {
  const baseURL = `${import.meta.env.VITE_SITE_URL}/api`;
  return async (url: string, body: object | undefined) => {
    const requestOptions: AxiosRequestConfig = {
      url: `${baseURL}/${url}`,
      method,
      data: null,
    };
    if (body) {
      requestOptions.data = body;
    }
    return axios(requestOptions);
  };
}

export const api = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};

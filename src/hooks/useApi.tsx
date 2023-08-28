import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { api } from "services";

/**
 * On success, returns the body of the GET request as well as loading and errors
 *
 * @description
 * React hook abstraction for request from the dpgraham.com backend server. Currently,
 *
 * @param url {string}
 * @return [data, loading, error]
 *
 * @example
 * const [data, loading , error ] = useHtApi<MyType>(`/api/resource/path/${id}`)
 */
export function useApi<T>(url: string) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    if (!url) return;
    api
      .get(url, undefined)
      .then((response: AxiosResponse<T>) => setData(response.data))
      .then(() => setLoading(false))
      .catch(setError);
  }, [url]);

  return [data, loading, error] as const;
}

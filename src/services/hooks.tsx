import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { api } from "services/api";

const cache = new Map<string, unknown>();

export function useQuery<T>(url: string) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    if (!url) return;
    // loading is initially true by default
    if (cache.get(url)) {
      console.debug(`cache hit: ${url}`);
      setData(cache.get(url) as T);
      setLoading(false);
      return;
    } else {
      console.debug(`cache miss: ${url}`);
      api
        .get(url, undefined)
        .then(
          (response: AxiosResponse<T>) => (
            setData(response.data), response.data
          ),
        )
        .then((data) => cache.set(url, data))
        .then(() => setLoading(false))
        .catch(setError);
    }
  }, [url]);

  return [data, loading, error] as const;
}

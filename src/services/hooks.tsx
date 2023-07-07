import { useEffect, useState } from "react";
import { api } from "services/api";

export function useQuery<T>(url: string) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    api
      .get(url, null)
      .then((response) => setData(response.data))
      .then(() => setLoading(false))
      .catch(setError);
  }, [url]);

  return [data, loading, error] as const;
}

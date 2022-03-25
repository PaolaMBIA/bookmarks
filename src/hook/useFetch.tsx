import { useState, useEffect, useCallback } from "react";

type FetchResponse = [
  {
    state: {};
    loading: boolean;
    error: boolean;
  },
  (url: string) => Promise<void>
];

export const useFetch = (): FetchResponse => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async (url) => {
    setError(false);
    setLoading(true);

    try {
      const result = await (
        await fetch(`https://noembed.com/embed?dataType=json&url=${url}`)
      ).json();
      setState(result);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData("");
  }, [fetchData]);

  return [{ state, loading, error }, fetchData];
};

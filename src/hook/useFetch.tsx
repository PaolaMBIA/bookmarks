import { useState, useEffect, useCallback, useMemo } from "react";

type FetchResponse = [
  {
    state: {};
    loading: boolean;
    error: boolean;
  },
  (url: string | undefined) => Promise<void>
];

export const useFetch = (): FetchResponse => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  console.log("cc");
  const fetchData = async (url: string | undefined) => {
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
  };

  // useCallback(async (url) => {
  //   setError(false);
  //   setLoading(true);

  //   try {
  //     const result = await (
  //       await fetch(`https://noembed.com/embed?dataType=json&url=${url}`)
  //     ).json();

  //     setState(result);
  //   } catch (error) {
  //     setError(true);
  //   }
  //   setLoading(false);
  // }, []);

  return [{ state, loading, error }, fetchData];
};

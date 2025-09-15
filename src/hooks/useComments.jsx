import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useComments = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    isEmpty: data && data.length === 0,
  };
};

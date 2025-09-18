import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { useRouter } from "next/router";

export const useComment = () => {
  const router = useRouter();
  const {
    data: comment,
    error: error,
    isLoading: isLoading,
  } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
      : null,
    fetcher
  );
  return {
    comment,
    error,
    isLoading,
  };
};

import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const usePost = () => {
  const router = useRouter();
  const {
    data: post,
    error: postError,
    isLoading: postIsLoading,
  } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );
  const {
    data: user,
    error: userError,
    isLoading: userIsLoading,
  } = useSWR(
    post?.userId
      ? `https://jsonplaceholder.typicode.com/users/${post.userId}`
      : null,
    fetcher
  );

  return {
    post,
    error: postError || userError,
    isLoading: postIsLoading || userIsLoading,
    user,
  };
};

import { useQueryClient } from "@tanstack/react-query";
import { useMemo, useRef } from "react";
import { QUERY_KEY_USER, useMe } from "../service/query/useMe.js";
import { QUERY_KEY_TOKEN, useToken } from "../service/query/useToken.js";

export const useAuth = () => {
  const queryClient = useQueryClient();

  const { data: token, isFetched: isTokenFetched } = useToken();

  const { data: user, isFetched: isUserFetched } = useMe({
    enabled: Boolean(token),
    onSettled: user => {
      if (!localStorage.getItem("accessToken")) {
        clearUser();
        return;
      }
      if (user) {
        return;
      } else {
        clearUser();
      }
    },
    retry: false,
  });

  const updateUser = newUser => {
    queryClient.setQueryData([QUERY_KEY_USER], newUser);
  };

  const clearUser = () => {
    localStorage.removeItem("accessToken");
    queryClient.setQueryData([QUERY_KEY_USER], null);
    queryClient.setQueryData([QUERY_KEY_TOKEN], null);
  };

  const isInitialized = useMemo(() => {
    if (!isTokenFetched) return false;
    if (!token) return true;
    if (!isUserFetched) return false;

    return true;
  }, [isTokenFetched, token, isUserFetched]);

  const isAuthenticated = isInitialized && user;

  return { user, updateUser, clearUser, isInitialized, isAuthenticated };
};

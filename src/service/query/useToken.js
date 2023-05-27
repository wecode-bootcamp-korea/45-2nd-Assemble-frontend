import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../../utils/index.js";

import { QUERY_KEY_USER } from "./useMe.js";

export const QUERY_KEY_TOKEN = "QUERY_KEY_TOKEN";

export const useToken = () => {
  const queryClient = useQueryClient();
  return useQuery(
    [QUERY_KEY_TOKEN],
    () => localStorage.getItem("accessToken"),
    {
      onSettled: token => {
        if (token) {
          apiClient.defaults.headers.common.Authorization = `${token}`;
        } else {
          queryClient.setQueryData([QUERY_KEY_USER], null);
          delete apiClient.defaults.headers.common.Authorization;
        }
      },
    }
  );
};

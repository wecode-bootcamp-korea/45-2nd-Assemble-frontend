import { useQuery } from "@tanstack/react-query";
import { getMe } from "../apis/getMe.js";

export const QUERY_KEY_USER = "QUERY_KEY_USER";

export const useMe = options => {
  return useQuery([QUERY_KEY_USER], getMe, options);
};

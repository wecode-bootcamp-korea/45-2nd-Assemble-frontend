import { useQuery } from "@tanstack/react-query";
import { getMatches } from "../apis/getMatches";

export const QUERY_KEY_INFINITE = "QUERY_KEY_INFINITE";

export const useScroll = options => {
  return useQuery([QUERY_KEY_INFINITE], getMatches, options);
};

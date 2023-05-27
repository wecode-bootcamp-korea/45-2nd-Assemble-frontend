import { apiClient } from "../../utils/index.js";

export const getMatches = async (pageParam = 1, options = {}) => {
  const { data } = await apiClient.get("/matches");
  return data;
};
// ?_page=${pageParam}`, options

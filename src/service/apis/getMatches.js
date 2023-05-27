import { apiClient } from "../../utils/index.js";

export const getMatches = async (pageParam = 1, options = {}) => {
  const { data } = await apiClient.get(`/matches?page=${pageParam}`, options);

  return data;
};
// `/matches?page=${pageParam}`
// `/data/courtData.json?page=${pageParam}`

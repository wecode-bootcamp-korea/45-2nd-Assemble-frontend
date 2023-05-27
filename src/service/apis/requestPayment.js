import { apiClient } from "../../utils/index.js";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY_TOKEN, useToken } from "../query/useToken.js";

export const requestPayment = async options => {
  const { data } = await apiClient.post("/matches", options);
  return data;
};

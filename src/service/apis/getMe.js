import { apiClient } from "../../utils/index.js";

export const getMe = async () => {
  const { data } = await apiClient.get("/users");
  return data;
};

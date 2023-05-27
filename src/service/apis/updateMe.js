import { apiClient } from "../../utils/index.js";

export const updateMe = async updateInfos => {
  const { data } = await apiClient.patch("/users", updateInfos);
  return data.user;
};

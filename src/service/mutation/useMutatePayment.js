import { useMutation } from "@tanstack/react-query";
import { requestPayment } from "../apis/requestPayment";

export const useMutatePayment = () => {
  return useMutation({ mutationFn: requestPayment });
};

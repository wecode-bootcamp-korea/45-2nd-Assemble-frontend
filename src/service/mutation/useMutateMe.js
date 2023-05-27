import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMe } from "../apis/updateMe";
import { QUERY_KEY_USER } from "../query/useMe";

export const useMutateMe = options => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateMe,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_USER],
      });
      // queryClient.setQueryData([QUERY_KEY_USER], data);
    },
    ...options,
  });
};

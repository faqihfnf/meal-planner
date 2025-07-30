import { QueryClient, useMutation } from "@tanstack/react-query";
import { deleteCategory } from "./categoryMutations";
import { toast } from "sonner";

const useDeleteCategory = () => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      await deleteCategory(id);
    },
    onSuccess: () => {
      //# TODO show user a success message with toast
      toast.success("Category deleted successfully.");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};

export { useDeleteCategory };

"use client"
import { Button } from "@/components/ui/button";
import { useDeleteCategory } from "../_services/use-category-mutations";
import { useCategories } from "../_services/use-category-queries";
import { Edit, Trash } from "lucide-react";

const CategoryCards = () => {
  const categoriesQuery = useCategories();
  const deleteCategoryMutations = useDeleteCategory();

  return (
    <div className="grid grid-cols-4 gap-2">
      {categoriesQuery.data?.map((item: any) => (
        <div
          className="bg-accent gap3 flex flex-col justify-between rounded-lg p-6 shadow-md"
          key={item.id}
        >
          <p className="truncate">{item.name}</p>
          <div className="flex gap-1">
            <Button className="size-6" variant={"ghost"} onClick={() => {}}>
              <Edit />
            </Button>
            <Button
              className="size-6"
              variant={"ghost"}
              onClick={() => deleteCategoryMutations.mutate(item.id)}
            >
              <Trash />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export { CategoryCards };

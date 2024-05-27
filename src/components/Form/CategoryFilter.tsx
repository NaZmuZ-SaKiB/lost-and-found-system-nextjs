"use client";

import { useGetAllCategoriesQuery } from "@/redux/api/category.api";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CategoryFilter = () => {
  const { data, isLoading } = useGetAllCategoriesQuery(undefined);

  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleChange = (value: string) => {
    if (value === "All") {
      params.delete("category");
      params.delete("page");
      params.append("page", "1");
      router.replace(`${pathName}?${params}`);
      return;
    }

    params.delete("category");
    params.delete("page");
    params.append("page", "1");
    params.append("category", value);
    router.replace(`${pathName}?${params}`);
  };
  return (
    <div>
      <Select onValueChange={(value) => handleChange(value)}>
        <SelectTrigger>
          <SelectValue placeholder={"Select Category"} />
        </SelectTrigger>

        {!isLoading && (
          <SelectContent>
            <SelectItem value={"All"}>All</SelectItem>

            {data.map((item: any) => (
              <SelectItem
                key={"category-filter" + "-" + item.id}
                value={item.id}
              >
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        )}
      </Select>
    </div>
  );
};

export default CategoryFilter;

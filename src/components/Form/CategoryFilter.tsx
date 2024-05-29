"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type TProps = {
  categories: any[];
};

const CategoryFilter = ({ categories }: TProps) => {
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
      <Select
        onValueChange={(value) => handleChange(value)}
        defaultValue={searchParams.get("category") || ""}
      >
        <SelectTrigger>
          <SelectValue placeholder={"Select Category"} />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value={"All"}>All Category</SelectItem>

          {categories?.map((item: any) => (
            <SelectItem key={"category-filter" + "-" + item.id} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;

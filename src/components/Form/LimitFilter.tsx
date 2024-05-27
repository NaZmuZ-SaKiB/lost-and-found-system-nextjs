"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const LimitFilter = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleChange = (value: string) => {
    params.delete("limit");
    params.delete("page");
    params.append("page", "1");
    params.append("limit", value);
    router.replace(`${pathName}?${params}`);
  };
  return (
    <div>
      <Select onValueChange={(value) => handleChange(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Limit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="30">30</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LimitFilter;

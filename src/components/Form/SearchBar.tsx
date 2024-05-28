"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";

const SearchBar = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleChange = (value: string) => {
    params.delete("searchTerm");
    params.delete("page");
    params.append("page", "1");
    params.append("searchTerm", value);

    setTimeout(() => {
      router.replace(`${pathName}?${params}`);
    }, 300);
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Search..."
        defaultValue={searchParams.get("searchTerm") || ""}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

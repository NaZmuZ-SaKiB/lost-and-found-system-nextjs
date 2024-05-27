"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

type TProps = {
  page: number;
  total: number;
  limit: number;
};

const CustomPagination = ({ page, total, limit }: TProps) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const params = new URLSearchParams(searchParams);

  const pages = Math.ceil(total / limit);

  const handlePaginationClick = (pageNumber: number) => {
    params.delete("page");
    params.append("page", pageNumber.toString());
    router.replace(`${pathName}?${params}`);
  };

  const isNext = page < pages;

  const handleNext = () => {
    params.delete("page");
    params.append("page", (page + 1).toString());
    router.push(`${pathName}?${params}`);
  };

  const handlePrev = () => {
    params.delete("page");
    params.append("page", (page - 1).toString());
    router.push(`${pathName}?${params}`);
  };

  if (pages === 1) {
    return null;
  }

  return (
    <div className="mt-5">
      <Pagination>
        <PaginationContent>
          {page !== 1 && (
            <PaginationItem onClick={handlePrev} className="cursor-pointer">
              <PaginationPrevious />
            </PaginationItem>
          )}

          {Array(pages)
            .fill(0)
            .map((_, index) => (
              <PaginationItem
                key={"pagination-item-" + index}
                onClick={() => handlePaginationClick(index + 1)}
                className="cursor-pointer"
              >
                <PaginationLink isActive={page === index + 1}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

          {isNext && (
            <PaginationItem onClick={handleNext} className="cursor-pointer">
              <PaginationNext />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CustomPagination;

import { Dispatch, SetStateAction, useCallback } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface PaginationBarProps {
  totalPage: number;
  onPageChange: Dispatch<SetStateAction<number>>;
  className?: string;
  currentPage?: number;
}

export default function PaginationBar({
  currentPage,
  totalPage,
  onPageChange,
  className,
}: PaginationBarProps) {
  const isEmpty = totalPage === 0;

  return (
    !isEmpty && (
      <div className={cn("flex items-center gap-2", className)}>
        Page:
        <Select
          defaultValue="1"
          value={currentPage?.toString()}
          onValueChange={(v) => onPageChange(Number.parseInt(v))}
        >
          <SelectTrigger className="w-16">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: totalPage }).map((_, index) => (
              <SelectItem value={(index + 1).toString()} key={index}>
                {index + 1}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  );
}

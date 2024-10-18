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

export interface PaginationBarProps {
  totalPage: number;
  currentPage: number;
  onPageChange?: Dispatch<SetStateAction<number>>;
  className?: string;
}

export default function PaginationBar({
  totalPage,
  currentPage,
  onPageChange,
  className,
}: PaginationBarProps) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPage;
  const isEmpty = totalPage === 0;

  const goToFistPage = useCallback(() => onPageChange?.(1), [onPageChange]);
  const goToLastPage = useCallback(
    () => onPageChange?.(totalPage),
    [onPageChange, totalPage],
  );

  const nextPage = useCallback(
    () => !isLastPage && onPageChange?.(currentPage + 1),
    [onPageChange, currentPage, isLastPage],
  );

  const prevPage = useCallback(
    () => !isFirstPage && onPageChange?.(currentPage - 1),
    [currentPage, onPageChange, isFirstPage],
  );

  return isEmpty ? null : (
    <Pagination className={className}>
      <PaginationContent>
        {!isFirstPage && (
          <>
            <PaginationItem>
              <PaginationPrevious onClick={prevPage} />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink onClick={goToFistPage}>1</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationLink isActive>{currentPage}</PaginationLink>
        </PaginationItem>

        {!isLastPage && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink onClick={goToLastPage}>
                {totalPage}
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationNext onClick={nextPage} />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
}

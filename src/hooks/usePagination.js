import { useState } from "react";
import { useEffect } from "react";

export default function usePagination(pagesToDisplay, pageCount) {
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState([]);
  const buildPagination = (pageIndex) => {
    setPage(pageIndex);
    let newPages = [],
      start = 0,
      end = pagesToDisplay;

    if (pageIndex > (pagesToDisplay - 1) / 2) {
      start = pageIndex - (pagesToDisplay - 1) / 2;
      end = start + pagesToDisplay;
    }

    if (pageIndex > pageCount - (pagesToDisplay + 1) / 2) {
      start = pageCount - pagesToDisplay;
      end = pageCount;
    }

    for (let i = start; i < end; i++) {
      newPages.push(i);
    }
    setPages(newPages);
  };

  useEffect(() => {
    buildPagination(0);
  }, []);
  return {
    buildPagination,
    page,
    pages,
  };
}

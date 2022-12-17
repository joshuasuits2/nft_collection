import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const PaginationStyles = styled.div`
  .active-btn {
    background: linear-gradient(180deg, #b444ff 0%, #f582ff 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Pagination = ({ pagesToDisplay, pageCount }) => {
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

  return (
    <PaginationStyles className="flex gap-x-5 justify-end">
      <button
        disabled={page === 0}
        onClick={() => buildPagination(0)}
        type="button"
      >
        Previous
      </button>
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => buildPagination(p)}
          className={`item w-6 h-6 rounded-full  ${
            p === page ? "active-btn" : ""
          }`}
        >
          {p + 1}
        </button>
      ))}
      <button
        disabled={page === pageCount - 1}
        onClick={() => buildPagination(pageCount - 1)}
        type="button"
      >
        Next
      </button>
    </PaginationStyles>
  );
};

export default Pagination;

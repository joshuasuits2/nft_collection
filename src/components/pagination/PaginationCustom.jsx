import React from "react";
import styled from "styled-components";

const PaginationStyles = styled.div`
  .active-btn {
    background: linear-gradient(180deg, #b444ff 0%, #f582ff 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const PaginationCustom = () => {
  return (
    <PaginationStyles className="flex gap-x-5 justify-end">
      <span>Previous</span>
      <ul className="list flex gap-x-5">
        <li className="item w-6 h-6 rounded-full active-btn">1</li>
        <li className="item w-6 h-6 rounded-full">2</li>
        <li className="item w-6 h-6 rounded-full">3</li>
        <li className="item w-6 h-6 rounded-full">4</li>
        <li className="item w-6 h-6 rounded-full">5</li>
      </ul>
      <span>Next</span>
    </PaginationStyles>
  );
};

export default PaginationCustom;

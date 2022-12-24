import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/layout/Card";
import Heading from "../../components/layout/Heading";
import { baseURL } from "../../config/getConfig";
import usePagination from "../../hooks/usePagination";
import styled from "styled-components";

const PaginationStyles = styled.div`
  .active-btn {
    background: linear-gradient(180deg, #b444ff 0%, #f582ff 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const AllNFTs = ({ pageRefs }) => {
  const [nfts, setNfts] = useState([]);
  const { buildPagination, page, pages } = usePagination(5, 10);
  const [pQuery, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${baseURL}/api/nfts?includeOwner=1&limit=12&page=${pQuery + 1}`
        );
        setNfts(res?.data?.nfts);
        console.log("res?.data?.nfts: ", res?.data?.nfts);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [pQuery]);

  return (
    <div
      className="mt-[90px]"
      ref={(e) => (pageRefs.current = { ...pageRefs.current, allNFT: e })}
    >
      <Heading alignItems={"start"}>ALL NFTs</Heading>
      <div className="grid grid-cols-4 gap-x-[50px] gap-y-[70px]">
        {nfts.length > 0 &&
          nfts.map((category) => (
            <Card
              key={category.id}
              srcTop={`${baseURL}/storage/nftImages/${category.url_image_nft}`}
              name={category?.name}
              owner={category?.owner?.name}
              price={category?.price}
              remaining={category?.updated_at}
              crypto={category?.crypto_id}
              id={category?.id}
              coin={category?.crypto}
              status={category.status}
            />
          ))}
      </div>
      <PaginationStyles className="mt-[83px] flex gap-x-5 justify-end">
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
            onClick={() => {
              buildPagination(p);
              setQuery(p);
            }}
            className={`item w-6 h-6 rounded-full  ${
              p === page ? "active-btn" : ""
            }`}
          >
            {p + 1}
          </button>
        ))}
        <button
          disabled={page === 10 - 1}
          onClick={() => buildPagination(10 - 1)}
          type="button"
        >
          Next
        </button>
      </PaginationStyles>
    </div>
  );
};

export default AllNFTs;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/layout/Card";
import PageContainer from "../components/layout/PageContainer";
import { baseURL } from "../config/getConfig";
const SearchAllItem = () => {
  const [allNfts, setAllNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const { slug } = useParams();
  let params = new URLSearchParams(slug);
  let slugID = params.get("search_query");

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const responseOwner = await axios.get(
          `${baseURL}/api/nfts?includeOwner=1&name=${slugID}`
        );
        setAllNfts(responseOwner?.data?.nfts);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErrorMessage(`The error message: ${error}`);
      }
    })();
  }, [slugID]);
  return (
    <div className="mt-[50px] body-style">
      <PageContainer>
        <span className="text-[45px] font-bold capitalize tracking-wide">
          Sell & Buy<br></br>
          <span className="text-[60px] text-[#fbff2a]">NFT</span> Digital
          Artwork
        </span>

        <div className="mt-[50px]">
          <span className="font-[400]">+{allNfts?.length} results found</span>
        </div>

        {allNfts?.length > 0 && (
          <div className="mt-10 grid grid-cols-4 gap-[50px]">
            {allNfts?.length > 0 &&
              allNfts.map((category) => (
                <Card
                  key={category.id}
                  srcTop={`${baseURL}/storage/nftImages/${category.url_image_nft}`}
                  name={category.name}
                  owner={`by ${category.owner.name}`}
                  srcCoin={category.coin}
                  price={category.price}
                  remaining={"22d 12h 12m 12s"}
                  crypto={category.crypto_id}
                  id={category.id}
                  status={category.status}
                ></Card>
              ))}
            {allNfts?.length === 0 && <span>No result was found!</span>}
          </div>
        )}
      </PageContainer>
      <div className="h-20 w-full"></div>
    </div>
  );
};

export default SearchAllItem;

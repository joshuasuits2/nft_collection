import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/layout/Card";
import PageContainer from "../components/layout/PageContainer";
import { baseURL } from "../config/getConfig";

const SearchAllItem = () => {
  const [allNfts, setAllNfts] = useState();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const [url, setUrl] = useState("");

  const { slug } = useParams();
  let params = new URLSearchParams(slug);
  let slugID = params.get("search_query");
  console.log(slugID);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        console.log("Successfully");
        const response = await axios.get(
          `${baseURL}/api/nfts?includeOwner=1&name=${slugID}`
        );
        console.log(response?.data?.nfts);
        setAllNfts(response?.data?.nfts);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErrorMessage(`The error message: ${error}`);
      }
    })();
  }, [slugID]);
  return (
    <div>
      <PageContainer>
        <div className="grid grid-cols-4 gap-x-[50px]">
          {allNfts?.length > 0 &&
            allNfts.map((category) => (
              <Card
                key={category.id}
                srcTop={`${baseURL}/${category.url_image_nft}`}
                name={category.name}
                owner={`by ${category.owner.name}`}
                srcCoin={category.coin}
                price={category.price}
                remaining={"22d 12h 12m 12s"}
                crypto={category.crypto_id}
                id={category.id}
              ></Card>
            ))}
          {allNfts?.length === 0 && <span>No result was found!</span>}
        </div>
      </PageContainer>
    </div>
  );
};

export default SearchAllItem;

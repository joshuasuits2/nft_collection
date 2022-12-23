import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/layout/Card";
import CardCollection from "../components/layout/CardCollection";
import PageContainer from "../components/layout/PageContainer";
import { baseURL } from "../config/getConfig";
import { SplideSlide } from "@splidejs/react-splide";
import SliderCustom from "../components/slider/SliderCustom";

const SearchAllItem = () => {
  const [allNfts, setAllNfts] = useState([]);
  const [allCollections, setAllCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const { slug } = useParams();
  let params = new URLSearchParams(slug);
  let slugID = params.get("search_query");

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const resNfts = await axios.get(
          `${baseURL}/api/nfts?includeOwner=1&name=${slugID}`
        );

        const resCollections = await axios.get(
          `${baseURL}/api/collections?includeOwner=1&name=${slugID}`
        );

        setAllNfts(resNfts?.data?.nfts);
        setAllCollections(resCollections?.data?.collections);
        console.log(resCollections);
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
          <span className="font-[400]">
            +{allNfts?.length + allCollections?.length} results found
          </span>
        </div>

        <div className="mt-10">
          {allCollections?.length >= 3 ? (
            allCollections.map((card) => (
              <SliderCustom perPage={3}>
                <SplideSlide key={card.id}>
                  <CardCollection
                    id={card?.id}
                    logo={card?.url_image_logo}
                    banner={card?.url_image_banner}
                    name={card?.name}
                  />
                </SplideSlide>
              </SliderCustom>
            ))
          ) : (
            <div className="grid grid-cols-3">
              {allCollections.map((card) => (
                <CardCollection
                  key={card.id}
                  id={card?.id}
                  logo={card?.url_image_logo}
                  banner={card?.url_image_banner}
                  name={card?.name}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-20">
          {allNfts?.length > 0 && (
            <div className="grid grid-cols-4 gap-[50px]">
              {allNfts?.length > 0 &&
                allNfts.map((category) => (
                  <Card
                    key={category.id}
                    srcTop={`${baseURL}/storage/nftImages/${category.url_image_nft}`}
                    name={category.name}
                    owner={category.owner.name}
                    price={category.price}
                    remaining={category.updated_at}
                    crypto={category.crypto_id}
                    id={category.id}
                    status={category.status}
                    coin={category.crypto}
                  ></Card>
                ))}
              {allNfts?.length === 0 && <span>No result was found!</span>}
            </div>
          )}
        </div>
      </PageContainer>
      <div className="h-20 w-full"></div>
    </div>
  );
};

export default SearchAllItem;

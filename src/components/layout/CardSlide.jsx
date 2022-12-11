import Card from "./Card";
import styled from "styled-components";
import Button from "../button/Button";
import SliderCustom from "../slider/SliderCustom";
import { SplideSlide } from "@splidejs/react-splide";
import { baseURL } from "../../config/getConfig";
import { useEffect, useState } from "react";
import axios from "axios";

const CardSlide = ({ data, idOwner, ...props }) => {
  const [nftOwner, setNftOwner] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${baseURL}/api/nfts?includeOwner=1&owner_id=${idOwner}`
      );
      console.log(res.data.nfts);
      setNftOwner(res.data.nfts);
    })();
  }, [idOwner]);
  return (
    <>
      <div className="mt-[65px]">
        <SliderCustom>
          {data
            .sort(function (a, b) {
              return b.price - a.price;
            })
            .filter((item, index) => index <= 4)
            .map((category) => (
              <SplideSlide key={category.id}>
                <Card
                  srcTop={`${baseURL}/${category.url_image_nft}`}
                  name={category.name}
                  owner={`by ${category.owner.name}`}
                  srcCoin={category.coin}
                  price={category.price}
                  remaining={"22d 12h 12m 12s"}
                  crypto={category.crypto_id}
                  id={category.id}
                />
              </SplideSlide>
            ))}
        </SliderCustom>
        <Button className="mt-[100px] mx-auto" width={"181px"}>
          See More
        </Button>
      </div>
    </>
  );
};

export default CardSlide;

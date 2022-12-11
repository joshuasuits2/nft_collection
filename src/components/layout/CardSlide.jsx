import Card from "./Card";
import styled from "styled-components";
import Button from "../button/Button";
import SliderCustom from "../slider/SliderCustom";
import { SplideSlide } from "@splidejs/react-splide";
import { baseURL } from "../../config/getConfig";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSlide = ({ data, idOwner, ...props }) => {
  return (
    <>
      <div className="mt-[65px]">
        <SliderCustom>
          {data.length > 0 &&
            data
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
          {data.length === 0 && (
            <div className="grid grid-cols-4 gap-x-[50px]">
              {Array(4)
                .fill(0)
                .map((item, index) => (
                  <div key={index}>
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                      <Skeleton
                        width={273}
                        height={355}
                        style={{ borderRadius: "8px" }}
                      />
                    </SkeletonTheme>
                  </div>
                ))}
            </div>
          )}
        </SliderCustom>
        <Button className="mt-[100px] mx-auto" width={"181px"}>
          See More
        </Button>
      </div>
    </>
  );
};

export default CardSlide;

import Card from "./Card";
import Button from "../button/Button";
import SliderCustom from "../slider/SliderCustom";
import { SplideSlide } from "@splidejs/react-splide";
import { baseURL } from "../../config/getConfig";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// .sort(function (a, b) {
//   return b.price - a.price;
// })
const CardSlide = ({ data, idOwner, ...props }) => {
  return (
    <>
      <div className="mt-[65px]">
        <SliderCustom>
          {data.length > 0 &&
            data
              .filter((item, index) => index <= 5)
              .map((category) => (
                <SplideSlide key={category.id}>
                  <Card
                    srcTop={`${baseURL}/storage/nftImages/${category.url_image_nft}`}
                    name={category?.name}
                    owner={category?.owner?.name}
                    price={category?.price}
                    remaining={category?.updated_at}
                    crypto={category?.crypto_id}
                    id={category?.id}
                    coin={category?.crypto}
                    status={category?.status}
                  />
                </SplideSlide>
              ))}
          {data.length === 0 && (
            <div className="grid grid-cols-4 gap-x-[50px]">
              {Array(4)
                .fill(0)
                .map((item, index) => (
                  <div key={index}>
                    <SkeletonTheme baseColor="#28282E" highlightColor="#383844">
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

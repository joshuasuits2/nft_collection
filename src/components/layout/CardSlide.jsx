import Card from "./Card";
import styled from "styled-components";
import Button from "../button/Button";
import { ListCategory } from "../../fakeAPI/Categories.js";
import SliderCustom from "../slider/SliderCustom";
import { SplideSlide } from "@splidejs/react-splide";

const CardSlideStyles = styled.div``;
const CardSlide = () => {
  return (
    <CardSlideStyles>
      <div className="mt-[65px]">
        <SliderCustom>
          {ListCategory.map((category) => (
            <SplideSlide key={category.id}>
              <Card
                srcTop={category.img}
                name={category.name}
                creator={`by ${category.creator}`}
                srcCoin={category.coin}
                price={category.price}
                remaining={"22d 12h 12m 12s"}
              />
            </SplideSlide>
          ))}
        </SliderCustom>
        <Button className="mt-[100px] mx-auto" width={"181px"}>
          See More
        </Button>
      </div>
    </CardSlideStyles>
  );
};

export default CardSlide;

import Card from "./Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styled from "styled-components";
import Ethereum from "../../assets/outside/ethereum.png";
import MeeCat602 from "../../assets/nfts/MeeCat602.png";
import LovelyWork from "../../assets/nfts/lovely_work.png";
import MeeCat608 from "../../assets/nfts/MeeCat608.png";
import MeeCat6902 from "../../assets/nfts/MeeCat6902.png";
import MeeCat523 from "../../assets/nfts/MeeCat523.png";
import Button from "../button/Button";

const CardSlideStyles = styled.div`
  .splide__arrow {
    opacity: 1;
    width: 53px;
    height: 53px;
    background: linear-gradient(
      270deg,
      rgba(180, 68, 255, 0) -70.75%,
      rgba(245, 130, 255, 0.9) 130.19%
    );
  }
  .splide__arrow.your-class-arrow {
    svg {
      fill: white;
    }
  }
  .splide__arrow--prev.your-class-prev {
    left: -71px;
  }
  .splide__arrow--next.your-class-next {
    right: -71px;
  }
  .splide__pagination {
    bottom: -15%;
    display: flex;
    gap: 3px;
  }
  .splide__pagination__page.is-active {
    opacity: 1;
    background-image: linear-gradient(
      180deg,
      rgb(172, 71, 255),
      rgb(193, 152, 251)
    );
  }
`;
const CardSlide = () => {
  return (
    <CardSlideStyles>
      <div className="mt-[65px]">
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            focus: "left",
            gap: "50px",
            autoScroll: {
              speed: 2,
            },
            classes: {
              arrows: "splide__arrows your-class-arrows",
              arrow: "splide__arrow your-class-arrow",
              prev: "splide__arrow--prev your-class-prev",
              next: "splide__arrow--next your-class-next",
              pagination: "splide__pagination your-class-pagination",
              page: "splide__pagination__page your-class-page",
            },
          }}
        >
          <SplideSlide>
            <Card
              srcTop={MeeCat602}
              name={"MeeCat #602"}
              creator={"by Layer Lab"}
              srcCoin={Ethereum}
              price={"0.03 ETH"}
              remaining={"22d 12h 12m 12s"}
            ></Card>
          </SplideSlide>
          <SplideSlide>
            <Card
              srcTop={LovelyWork}
              name={"Lovely Work #586 "}
              creator={"by Yurii"}
              srcCoin={Ethereum}
              price={"0.05 ETH"}
              remaining={"19d 10h 12m 13s"}
            ></Card>
          </SplideSlide>
          <SplideSlide>
            <Card
              srcTop={MeeCat608}
              name={"MeetCat #608 "}
              creator={"by Yurii"}
              srcCoin={Ethereum}
              price={"0.03 ETH"}
              remaining={"22d 12h 12m 12s"}
            ></Card>
          </SplideSlide>
          <SplideSlide>
            <Card
              srcTop={MeeCat6902}
              name={"MeetCat #6902"}
              creator={"by Yurii"}
              srcCoin={Ethereum}
              price={"0.03 ETH"}
              remaining={"22d 12h 12m 12s"}
            ></Card>
          </SplideSlide>
          <SplideSlide>
            <Card
              srcTop={MeeCat523}
              name={"MeetCat #523"}
              creator={"by Yurii"}
              srcCoin={Ethereum}
              price={"0.03 ETH"}
              remaining={"1d 12h 12m 12s"}
            ></Card>
          </SplideSlide>
        </Splide>
        <Button className="mt-[100px] mx-auto" width={"181px"}>
          See More
        </Button>
      </div>
    </CardSlideStyles>
  );
};

export default CardSlide;

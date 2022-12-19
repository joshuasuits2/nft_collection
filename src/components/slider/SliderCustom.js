import React from "react";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styled from "styled-components";

const SliderCustomStyles = styled.div`
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

const SliderCustom = ({ perPage = 4, children, ...props }) => {
  return (
    <SliderCustomStyles>
      <Splide
        options={{
          type: "loop",
          perPage: perPage,
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
        {children}
      </Splide>
    </SliderCustomStyles>
  );
};

export default SliderCustom;

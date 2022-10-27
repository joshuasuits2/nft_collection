import Card from "./Card";
import { ListCategory } from "../../fakeAPI/Categories.js";
import { SplideSlide } from "@splidejs/react-splide";

const CardList = ({ className }) => {
  return (
    <div
      className={`mt-[40px] grid grid-cols-4 gap-[50px] mb-[70px] ${className}`}
    >
      {ListCategory.filter((item, index) => index <= 3).map((category) => (
        <SplideSlide key={category.id}>
          <Card
            srcTop={category.img}
            name={category.name}
            creator={`by ${category.creator}`}
            srcCoin={category.coin}
            price={category.price}
            remaining={"22d 12h 12m 12s"}
          ></Card>
        </SplideSlide>
      ))}
    </div>
  );
};

export default CardList;

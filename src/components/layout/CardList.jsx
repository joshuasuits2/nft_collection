import Card from "./Card";
// import { ListCategory } from "../../fakeAPI/Categories.js";

const CardList = ({ className, data }) => {
  return (
    <div
      className={`mt-[40px] grid grid-cols-4 gap-[50px] mb-[70px] ${className}`}
    >
      {data &&
        data.length > 0 &&
        data
          .filter((item, index) => index <= 3)
          .map((category) => (
            <Card
              key={category.id}
              srcTop={category.img}
              name={category.name}
              creator={`by ${category.creator}`}
              srcCoin={category.coin}
              price={category.price}
              remaining={"22d 12h 12m 12s"}
            />
          ))}
    </div>
  );
};

export default CardList;

import CardSlide from "../../components/layout/CardSlide";
import Heading from "../../components/layout/Heading";

const TrendingCollection = () => {
  return (
    <div className="mt-[100px] relative">
      <Heading desc={"Check out our daily updated trending collections"}>
        TRENDING COLLECTION
      </Heading>
      <CardSlide></CardSlide>
    </div>
  );
};

export default TrendingCollection;

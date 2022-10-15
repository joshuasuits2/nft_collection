import CardList from "../../components/layout/CardList";
import Heading from "../../components/layout/Heading";

const NewItemsPage = () => {
  return (
    <div className="mt-[100px] relative">
      <Heading alignItems={"start"}>NEW ITEMS</Heading>
      <CardList></CardList>
      <CardList className="mt-[70px]"></CardList>
    </div>
  );
};

export default NewItemsPage;

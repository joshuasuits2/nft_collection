import CardList from "../../components/layout/CardList";
import Heading from "../../components/layout/Heading";
import { ListCategory } from "../../fakeAPI/Categories";

const NewItemsPage = () => {
  return (
    <div className="mt-[100px] relative">
      <Heading alignItems={"start"}>NEW ITEMS</Heading>
      <CardList data={ListCategory} />
      <CardList data={ListCategory} className="mt-[70px]" />
    </div>
  );
};

export default NewItemsPage;

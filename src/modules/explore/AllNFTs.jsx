import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/layout/Card";
import CardList from "../../components/layout/CardList";
import Heading from "../../components/layout/Heading";
import { baseURL } from "../../config/getConfig";
import { ListCategory } from "../../fakeAPI/Categories";

const AllNFTs = ({ pageRefs }) => {
  const [nfts, setNfts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${baseURL}/api/nfts?includeOwner=1`);
        setNfts(res?.data?.nfts);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div
      className="mt-[90px]"
      ref={(e) => (pageRefs.current = { ...pageRefs.current, allNFT: e })}
    >
      <Heading alignItems={"start"}>ALL NFTs</Heading>
      <div className="grid grid-cols-4 gap-x-[50px] gap-y-[70px]">
        {nfts.length > 0 &&
          nfts.map((category) => (
            <Card
              key={category.id}
              srcTop={`${baseURL}/storage/nftImages/${category.url_image_nft}`}
              name={category.name}
              owner={category.owner.name}
              price={category.price}
              remaining={category.updated_at}
              crypto={category.crypto_id}
              id={category.id}
              coin={category.crypto}
            />
          ))}
      </div>
    </div>
  );
};

export default AllNFTs;

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Card from "../../components/layout/Card";
import Heading from "../../components/layout/Heading";
import { baseURL } from "../../config/getConfig";

const NewItemsPage = () => {
  const [nfts, setNfts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${baseURL}/api/nfts?includeOwner=1`);
        setNfts(res?.data?.nfts);
      } catch (error) {}
    })();
  }, []);
  return (
    <div className="mt-[100px] relative">
      <Heading alignItems={"start"}>NEW ITEMS</Heading>
      <div className="grid grid-cols-4 gap-x-[50px] gap-y-[70px]">
        {nfts.length > 0 &&
          nfts
            .sort(function (a, b) {
              var keyA = new Date(a.updated_at),
                keyB = new Date(b.updated_at);
              if (keyA < keyB) return 1;
              if (keyA > keyB) return -1;
              return 0;
            })
            .filter((item, index) => index < 8)
            .map((category) => (
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
      {nfts.length === 0 && (
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
    </div>
  );
};

export default NewItemsPage;

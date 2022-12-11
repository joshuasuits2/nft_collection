import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import CardSlide from "../../components/layout/CardSlide";
import Heading from "../../components/layout/Heading";
import AuthUser from "../../config/AuthUser";
import { baseURL } from "../../config/getConfig";
const TrendingCollection = () => {
  const [nfts, setNfts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${baseURL}/api/nfts?includeOwner=1`);
      setNfts(res?.data.nfts);
    })();
  }, []);
  return (
    <div className="mt-[100px] relative">
      <Heading desc={"Check out our daily updated trending collections"}>
        TRENDING COLLECTION
      </Heading>
      <CardSlide data={nfts}></CardSlide>
    </div>
  );
};

export default TrendingCollection;

import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Heading from "../../components/layout/Heading";
import TabCollection from "../../components/tab/TabCollection";
import { baseURL } from "../../config/getConfig";

const ExploreCollection = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${baseURL}/api/topics`);
      setTopics(res.data.topics);
      console.log(res.data.topics);
    })();
  }, []);

  return (
    <div className="mt-[140px]">
      <Heading alignItems="left">EXPLORE COLLECTION</Heading>
      <TabCollection topics={topics}></TabCollection>
    </div>
  );
};

export default ExploreCollection;

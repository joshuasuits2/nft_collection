import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Heading from "../../components/layout/Heading";
import TabCollection from "../../components/tab/TabCollection";
import { baseURL } from "../../config/getConfig";

const ExploreCollection = () => {
  const [topics, setTopics] = useState([]);
  const [loadingTopics, setLoadingTopics] = useState(true);
  useEffect(() => {
    setLoadingTopics(true);
    (async () => {
      const res = await axios.get(`${baseURL}/api/topics`);
      setTopics(res?.data?.topics);
      setLoadingTopics(false);
    })();
  }, []);

  return (
    <div className="mt-[140px]">
      <Heading alignItems="left">EXPLORE COLLECTION</Heading>
      <TabCollection topics={topics} loadingTopics={loadingTopics} />
    </div>
  );
};

export default ExploreCollection;

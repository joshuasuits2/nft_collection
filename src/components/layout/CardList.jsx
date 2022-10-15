import React from "react";
import Card from "./Card";
import Ethereum from "../../assets/outside/ethereum.png";
import MeeCat602 from "../../assets/nfts/MeeCat602.png";
import LovelyWork from "../../assets/nfts/lovely_work.png";
import MeeCat608 from "../../assets/nfts/MeeCat608.png";
import MeeCat6902 from "../../assets/nfts/MeeCat6902.png";

const CardList = ({ className }) => {
  return (
    <div className={className}>
      <div className="mt-[40px] grid grid-cols-4 gap-[50px]">
        <Card
          srcTop={MeeCat602}
          name={"MeeCat #602"}
          creator={"by Layer Lab"}
          srcCoin={Ethereum}
          price={"0.03 ETH"}
          remaining={"22d 12h 12m 12s"}
        ></Card>

        <Card
          srcTop={LovelyWork}
          name={"Lovely Work #586 "}
          creator={"by Yurii"}
          srcCoin={Ethereum}
          price={"0.05 ETH"}
          remaining={"19d 10h 12m 13s"}
        ></Card>

        <Card
          srcTop={MeeCat608}
          name={"MeetCat #608 "}
          creator={"by Yurii"}
          srcCoin={Ethereum}
          price={"0.03 ETH"}
          remaining={"22d 12h 12m 12s"}
        ></Card>

        <Card
          srcTop={MeeCat6902}
          name={"MeetCat #6902"}
          creator={"by Yurii"}
          srcCoin={Ethereum}
          price={"0.03 ETH"}
          remaining={"22d 12h 12m 12s"}
        ></Card>
      </div>
    </div>
  );
};

export default CardList;

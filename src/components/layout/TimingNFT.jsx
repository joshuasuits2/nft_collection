import React from "react";

const TimingNFT = () => {
  return (
    <div className="action flex gap-x-[180px] mt-[30px] justify-between">
      <div className="auction-ending">
        <span>Auction Ending in</span>
        <div className="timing mt-4 flex gap-x-5">
          <div className="days flex flex-col gap-y-3 items-center">
            <div className="number flex gap-x-[5px]">
              <div className="pri linear-timing flex items-center">2</div>
              <div className="sec linear-timing flex items-center">5</div>
            </div>
            <div className="text">Days</div>
          </div>
          <div className="hours flex flex-col gap-y-3 items-center">
            <div className="number flex gap-x-[5px]">
              <div className="pri linear-timing flex items-center">1</div>
              <div className="sec linear-timing flex items-center">6</div>
            </div>
            <div className="text">hour</div>
          </div>
          <div className="minutes flex flex-col gap-y-3 items-center">
            <div className="number flex gap-x-[5px]">
              <div className="pri linear-timing flex items-center">3</div>
              <div className="sec linear-timing flex items-center">3</div>
            </div>
            <div className="text">Minutes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimingNFT;

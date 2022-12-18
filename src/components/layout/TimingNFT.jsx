import React from "react";

const TimingNFT = ({
  priDay = 2,
  priHour = 5,
  priMinute = 1,
  secDay = 6,
  secHour = 3,
  secMinute = 3,
  ...props
}) => {
  return (
    <div className="action flex gap-x-[180px] mt-[30px] justify-between">
      <div className="auction-ending">
        <span>Auction Ending in</span>
        <div className="timing mt-4 flex gap-x-5">
          <div className="days flex flex-col gap-y-3 items-center">
            <div className="number flex gap-x-[5px]">
              <div className="pri linear-timing flex items-center">
                {priDay}
              </div>
              <div className="sec linear-timing flex items-center">
                {secDay}
              </div>
            </div>
            <div className="text">Days</div>
          </div>
          <div className="hours flex flex-col gap-y-3 items-center">
            <div className="number flex gap-x-[5px]">
              <div className="pri linear-timing flex items-center">
                {priHour}
              </div>
              <div className="sec linear-timing flex items-center">
                {secHour}
              </div>
            </div>
            <div className="text">hour</div>
          </div>
          <div className="minutes flex flex-col gap-y-3 items-center">
            <div className="number flex gap-x-[5px]">
              <div className="pri linear-timing flex items-center">
                {priMinute}
              </div>
              <div className="sec linear-timing flex items-center">
                {secMinute}
              </div>
            </div>
            <div className="text">Minutes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimingNFT;

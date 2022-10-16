import React from "react";
import styled from "styled-components";
import Dropdown from "../components/dropdown/Dropdown";
import Heading from "../components/layout/Heading";
import PageContainer from "../components/layout/PageContainer";
import CollectionStats from "./styles/stats/CollectionStats";

const StatsPageStyles = styled.div`
  width: 100%;
  background: #141418;
  background-size: cover;
  background-position: top left;
  padding: 0 !important;
  width: 100%;
  height: 4700px;
`;

const StatsPage = () => {
  return (
    <StatsPageStyles>
      <PageContainer>
        <CollectionStats></CollectionStats>
        <div className="mt-[45px] font-[600] text-[14px]">
          <div className="header flex opacity-70">
            <div className="flex-1 flex items-center justify-center">Rank</div>
            <div className="flex-[3]">Collection</div>
            <div className="flex-1 flex items-center justify-center">
              Volume
            </div>
            <div className="flex-1 flex items-center justify-center">
              % Change
            </div>
            <div className="flex-1 flex items-center justify-center">
              Floor Price
            </div>
            <div className="flex-1 flex items-center justify-center">Sales</div>
          </div>
          <div className="body flex mt-10 rounded-lg items-center justify-center bg-[#1D1922] h-20">
            <div className="flex-1 flex items-center justify-center">1</div>
            <div className="flex-[3] flex items-center">
              <img
                src=""
                alt=""
                className="w-[60px] h-[60px] object-cover rounded-[4px] mr-9"
              />
              <span className="mr-[10px]">Blood bats</span>
              <img src="" alt="" className="w-4 h-4 object-cover" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <span className="">691 ETH</span>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <span className=" text-[#1CFD76]">+124%</span>
            </div>
            <div className="flex-1 flex items-center justify-center text-[#FF910F]">
              15.10 ETH
            </div>
            <div className="flex-1 flex items-center justify-center text-[#c88efe]">
              43
            </div>
          </div>
        </div>
      </PageContainer>
    </StatsPageStyles>
  );
};

export default StatsPage;

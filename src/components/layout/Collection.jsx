import React from "react";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import styled from "styled-components";
import Ethereum from "../../assets/outside/ethereum.png";

const CollectionStyles = styled.div`
  .cell {
    position: relative;
    height: 80px;
    border-radius: 12px;
    padding: 10px 20px;
    &:after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      border: 1px solid transparent;
      border-radius: 12px;
      background: linear-gradient(
          93deg,
          rgba(235, 235, 235, 0) -6.21%,
          rgba(235, 235, 235, 0.33) -6.2%,
          rgba(219, 219, 219, 0.14) 118.18%
        )
        border-box;
      -webkit-mask: linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }
`;

const Collection = ({ id, name, url_image_logo, volume, logo, ...props }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/collection/${slugify(name)}&query=${id}`);
  };
  return (
    <CollectionStyles>
      <div className="cell flex justify-between text-[14px]">
        <div className="cell-left flex gap-x-4">
          <img
            src={logo}
            alt=""
            className="rounded-full w-[60px] h-[60px] object-cover cursor-pointer"
            onClick={handleNavigation}
          />
          <div className="title flex flex-col py-[5px]">
            <span className="font-bold">{name}</span>
            <div className="mt-auto flex gap-[5px] items-center">
              <span>Floor price:</span>
              <img src={Ethereum} alt="" className="h-[20px]" />
              <span>0.02 ETH</span>
            </div>
          </div>
        </div>

        <div className="cell-right flex flex-col items-end py-[5px]">
          <span className="text-[#1CFD76]">+194.13%</span>
          <div className="mt-auto flex gap-[5px] items-center">
            <img src={Ethereum} alt="" className="h-[20px]" />
            <span className="text-[#FF910F]">{volume}</span>
          </div>
        </div>
      </div>
    </CollectionStyles>
  );
};

export default Collection;

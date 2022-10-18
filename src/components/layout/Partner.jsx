import Ethereum from "../../assets/outside/ethereum.png";
import Solana from "../../assets/outside/Solana.png";
import Fantom from "../../assets/outside/Fantom.png";
import Binance from "../../assets/outside/Binance.png";
import Avalanche from "../../assets/outside/avalanche.png";
import Polygon from "../../assets/outside/polygon.png";
import Stacks from "../../assets/outside/Stacks.png";

const ListPartners = [
  {
    id: 1,
    src: Ethereum,
    name: "Ethereum",
  },
  {
    id: 2,
    src: Solana,
    name: "Solana",
  },
  {
    id: 3,
    src: Fantom,
    name: "Fantom",
  },
  {
    id: 4,
    src: Binance,
    name: "Binance",
  },
  {
    id: 5,
    src: Avalanche,
    name: "Avalanche",
  },
  {
    id: 6,
    src: Polygon,
    name: "Polygon",
  },
  {
    id: 7,
    src: Stacks,
    name: "Stacks",
  },
];

const Partner = ({ className }) => {
  return (
    <section className={`mt-[150px] ${className}`}>
      <ul className="flex justify-between">
        {ListPartners.map((partner) => {
          return (
            <li
              key={partner.id}
              className="flex items-center gap-[10px] cursor-pointer transition-all"
            >
              <img src={partner.src} alt="" />
              <span>{partner.name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Partner;

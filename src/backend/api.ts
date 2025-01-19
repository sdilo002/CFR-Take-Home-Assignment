import { Item } from "../types/types";

export const fetchItems = async (): Promise<Item[]> => {
    return [
      {
        type: "Stock",
        name: "Nvidia",
        logo: "nvidia.png",
        id: 1,
        stats: {
          price: 137.71,
          currency: "USD",
          priceType: "Price",
          changePercentage: -2.19,
          changeType: "Change 24hrs",
          marketCap: 3.31,
          marketCapUnit: "T",
        },
      },
      {
        type: "Crypto",
        name: "Bitcoin",
        logo: "bitcoin.png",
        id: 2,
        stats: {
          price: 96826.97,
          currency: "USD",
          priceType: "Price",
          changePercentage: 2.19,
          changeType: "Change 24hrs",
          marketCap: 3.31,
          marketCapUnit: "T",
        },
      },
      {
        type: "NFT",
        name: "Pudgy Penguins",
        logo: "pudgyPenguins.png",
        id: 3,
        stats: {
          price: 23.12,
          currency: "ETH",
          priceType: "Floor price",
          chainName: "Ethereum",
          chainType: "Crypto chain",
          volume: 3.31,
          volumeUnit: "ETH",
        },
      },
    ];
  };
  
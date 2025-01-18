export interface Stats {
    price: number;
    currency: string;
    priceType: string;
    changePercentage?: number;
    changeType?: string;
    marketCap?: number;
    marketCapUnit?: string;
    chainName?: string;
    chainType?: string;
    volume?: number;
    volumeUnit?: string;
  }
  
  export interface Item {
    type: "Stock" | "Crypto" | "NFT";
    name: string;
    logo: string;
    id: number;
    stats: Stats;
  }
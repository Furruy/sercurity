interface Props {
  index?: number;
  logoCrypto?: string;
  nameCrypto?: string;
  writeOffName?: string;
  cryptoPrice?: number;
  cryptoChangePositiveItemFirst?: number;
  cryptoChangePositiveItemSecond?: number;
  cryptoVolumeItemFist?: number;
  cryptoVolumeItemSecond?: number;
  valueChart?: number[];
}

const cryptoData = [
  {
    rank: 1,
    name: "Ether",
    symbol: "ETH",
    price: "$3.91k",
    change: "+0.34%",
    volume: "$745.89m",
    tvl: "$2.19b",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  },
  {
    rank: 2,
    name: "USD Coin",
    symbol: "USDC",
    price: "$1.00",
    change: "0.00%",
    volume: "$223.63m",
    tvl: "$630.37m",
    logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
  },
  {
    rank: 3,
    name: "Wrapped BTC",
    symbol: "WBTC",
    price: "$68.51k",
    change: "+0.24%",
    volume: "$63.41m",
    tvl: "$400.75m",
    logo: "https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.png",
  },
  {
    rank: 4,
    name: "Tether USD",
    symbol: "USDT",
    price: "$1.00",
    change: "0.00%",
    volume: "$132.68m",
    tvl: "$199.98m",
    logo: "https://cryptologos.cc/logos/tether-usdt-logo.png",
  },
  {
    rank: 5,
    name: "Dai Stablecoin",
    symbol: "DAI",
    price: "$1.00",
    change: "+0.02%",
    volume: "$18.88m",
    tvl: "$106.53m",
    logo: "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png",
  },
  {
    rank: 6,
    name: "Frax",
    symbol: "FRAX",
    price: "$1.00",
    change: "-0.10%",
    volume: "$2.42m",
    tvl: "$79.35m",
    logo: "https://cryptologos.cc/logos/frax-frax-logo.png",
  },
  {
    rank: 7,
    name: "Pepe",
    symbol: "PEPE",
    price: "<$0.001",
    change: "-7.57%",
    volume: "$15.84m",
    tvl: "$74.37m",
    logo: "https://cryptologos.cc/logos/pepe-pepe-logo.png",
  },
  {
    rank: 8,
    name: "Maker",
    symbol: "MKR",
    price: "$2.43k",
    change: "+15.01%",
    volume: "$16.15m",
    tvl: "$67.34m",
    logo: "https://cryptologos.cc/logos/maker-mkr-logo.png",
  },
  {
    rank: 9,
    name: "ChainLink Token",
    symbol: "LINK",
    price: "$20.01",
    change: "+1.23%",
    volume: "$3.50m",
    tvl: "$48.28m",
    logo: "https://cryptologos.cc/logos/chainlink-link-logo.png",
  },
  {
    rank: 10,
    name: "Flooring Lab Credit",
    symbol: "FLC",
    price: "$0.03",
    change: "-1.24%",
    volume: "$1.68m",
    tvl: "$39.83m",
    logo: "https://via.placeholder.com/20",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CryptoCardPool: React.FC<Props> = (props: Props) => {
  return (
    <div className="crypto-table">
      <div className="table-header">
        <div>
          <p>#</p>
        </div>
        <div>
          <p>Name</p>
        </div>
        <div>
          <p>TVL</p>
        </div>
        <div>
          <p>Volume 24H</p>
        </div>
        <div>
          <p>Volume 7D</p>
        </div>
      </div>
      {cryptoData.map((crypto) => (
        <div className="table-row" key={crypto.rank}>
          <div>
            <p>{crypto.rank}</p>
          </div>
          <div className="crypto-info">
            <div>
              <img
                src={crypto.logo}
                alt={`${crypto.name} Logo`}
                className="crypto-logo"
              />
              <img
                src={crypto.logo}
                alt={`${crypto.name} Logo`}
                className="crypto-logo"
              />
            </div>
            <span>{crypto.name}</span>
            <span className="crypto-symbol">({crypto.symbol})</span>
          </div>
          <div>
            <p>{crypto.tvl}</p>
          </div>
          <div>
            <p>{crypto.volume}</p>
          </div>
          <div>
            <p>{crypto.price}</p>
          </div>
        </div>
      ))}
      <div className="table-footer"></div>
    </div>
  );
};

export default CryptoCardPool;

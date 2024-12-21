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
  // Remaining data truncated for brevity
];

const CryptoCardPool: React.FC<Props> = () => {
  return (
    <div className="w-full bg-gray-900 text-white rounded-xl">
      {/* Header */}
      <div className="grid grid-cols-[2%_1fr_20%_20%_20%] items-center bg-gray-800 text-sm uppercase font-bold px-5 py-3 rounded-t-xl">
        <div>#</div>
        <div>Name</div>
        <div className="text-right">TVL</div>
        <div className="text-right">Volume 24H</div>
        <div className="text-right">Price</div>
      </div>

      {/* Rows */}
      {cryptoData.map((crypto) => (
        <div
          className="grid grid-cols-[2%_1fr_20%_20%_20%] items-center bg-gray-800 hover:bg-gray-700 transition px-5 py-3 border-b border-gray-700 cursor-pointer"
          key={crypto.rank}
        >
          <div>{crypto.rank}</div>
          <div className="flex items-center gap-3">
            <img
              src={crypto.logo}
              alt={`${crypto.name} Logo`}
              className="w-6 h-6 rounded-full"
            />
            <div>
              <span className="font-medium">{crypto.name}</span>
              <span className="ml-2 text-sm text-gray-400">({crypto.symbol})</span>
            </div>
          </div>
          <div className="text-right">{crypto.tvl}</div>
          <div className="text-right">{crypto.volume}</div>
          <div
            className={`text-right ${
              crypto.change.startsWith("+") ? "text-green-500" : "text-red-500"
            }`}
          >
            {crypto.price}
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="h-12 bg-gray-800 rounded-b-xl"></div>
    </div>
  );
};

export default CryptoCardPool;

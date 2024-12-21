
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
];

const CryptoCardTransaction = () => {
  return (
    <div className="w-full bg-gray-900 text-white rounded-lg">
      <div className="grid grid-cols-6 gap-4 items-center text-sm uppercase bg-gray-800 py-2 px-4 rounded-t-lg opacity-70">
        <div className="flex gap-4">
          <p>All</p>
          <p>Swaps</p>
          <p>Adds</p>
          <p>Remote</p>
        </div>
        <div className="text-right">Total Value</div>
        <div className="text-right">Token Amount</div>
        <div className="text-right">Token Amount</div>
        <div className="text-right">Account</div>
        <div className="text-right">Time</div>
      </div>

      {cryptoData.map((crypto) => (
        <div
          className="grid grid-cols-6 gap-4 items-center text-sm bg-gray-800 hover:bg-gray-700 py-2 px-4 transition cursor-pointer"
          key={crypto.rank}
        >
          <div>{crypto.rank}</div>
          <div className="flex items-center gap-3 justify-end">
            <img
              src={crypto.logo}
              alt={`${crypto.name} Logo`}
              className="w-6 h-6"
            />
            <span>{crypto.name}</span>
            <span className="text-gray-400 text-xs">({crypto.symbol})</span>
          </div>
          <div className="text-right">{crypto.price}</div>
          <div
            className={`text-right ${crypto.change.startsWith("-") ? "text-red-500" : "text-green-500"}`}
          >
            {crypto.change}
          </div>
          <div className="text-right">{crypto.volume}</div>
          <div className="text-right">{crypto.tvl}</div>
        </div>
      ))}

      <div className="py-4 rounded-b-lg"></div>
    </div>
  );
};

export default CryptoCardTransaction;
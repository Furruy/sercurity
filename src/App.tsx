import CryptoCardTransaction from "./components/crypto-card/crypto-card-transaction";

import CryptoCardPool from "./components/crypto-card/crypto-card-pool";
import CryptoCardTop from "./components/crypto-card/crypto-card-token";
import ChartSection from "./components/sections/chart.section";

function App() {
  return (
    <div className="w-full h-screenpx-4 lg:px-16 py-8 text-white space-y-16">
      <ChartSection/>
      <div className="flex flex-col gap-[5px] text-gray-400">
        <span>Top Tokens</span>
        <CryptoCardTop />
      </div>
      <div className="flex flex-col gap-[5px] text-gray-400">
        <span>Top Pools</span>
        <CryptoCardPool />
      </div>

      <div className="flex flex-col gap-[5px] text-gray-400">
        <span>Transactions</span>
        <CryptoCardTransaction />
      </div>
    </div>
  );
}

export default App;

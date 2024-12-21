/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from "react";

import dataIndex from "../../data/data-index.json";
import { DataContext } from "../../context.provider";

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

const CryptoCardTop: React.FC<Props> = () => {
  const [data, setData] = useState<any>([]);
  const { switchCoinData } = useContext<any>(DataContext);

  useEffect(() => {
    setData(dataIndex.top_gainers);
  }, []);

  const handleClick = (ticker: string) => {    
    switchCoinData(ticker);
  };

  return (
    <div className="bg-gray-900 text-white rounded-lg">
      <div className="grid grid-cols-[40px_1fr_300px_300px_300px_300px] items-center border-b border-gray-700 text-sm uppercase bg-gray-800 py-2 px-4 rounded-t-lg">
        <div>#</div>
        <div>Ticket</div>
        <div className="text-right">Price</div>
        <div className="text-right">Price Change</div>
        <div className="text-right">Volume</div>
        <div className="text-right">Change Percentage</div>
      </div>
      {data
        ? data.map((item: any, index: number) => (
            <div
              onClick={() => handleClick(item?.ticker)}
              key={index}
              className="grid grid-cols-[40px_1fr_300px_300px_300px_300px] items-center text-sm py-2 px-4 border-b border-gray-700 hover:bg-gray-800 transition cursor-pointer"
            >
              <div className="text-[12px]">{index + 1}</div>
              <div className="flex items-center gap-2">
                <div>
                  <p>{item.ticker}</p>
                </div>
              </div>
              <div className="text-right">{item.price}</div>
              <div
                className={`text-right ${
                  item.change_amount.startsWith("-")
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {item.change_amount}
              </div>
              <div className="text-right">{item.volume}</div>
              <div className="text-right">{item.change_percentage}</div>
            </div>
          ))
        : null}

      {/* <div className="h-12 bg-gray-800 rounded-b-lg"></div> */}
    </div>
  );
};


export default CryptoCardTop;

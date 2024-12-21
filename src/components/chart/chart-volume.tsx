/* eslint-disable @typescript-eslint/no-explicit-any */
import { Bar, BarChart, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context.provider";
import dataIndex from "../../data/data-index.json";

const ChartVolume = () => {
  const { coinData } = useContext(DataContext);
  const [data, setData] = useState<any>([]);

  const coinDataMain = coinData["Time Series (5min)"];
  const chartData = Object.keys(coinDataMain).map((key) => ({
    name: key,
    value: parseFloat(coinDataMain[key]["5. volume"]),
  }));

  const ticker = coinData["Meta Data"]["2. Symbol"];

  const formatNumber = (value: number) => {
    if (value >= 1_000_000_000) {
      return `$${(value / 1_000_000_000).toFixed(2)}b`;
    } else if (value >= 1_000_000) {
      return `$${(value / 1_000_000).toFixed(2)}m`;
    } else if (value >= 1_000) {
      return `$${(value / 1_000).toFixed(2)}k`;
    } else {
      return `$${value?.toFixed(2)}`;
    }
  };

  useEffect(() => {
    if (coinDataMain) {
      const filteredData = dataIndex.top_gainers.find(
        (item: any) => item.ticker === ticker
      );
      setData(filteredData);
    }
  }, [coinDataMain, ticker]);

  const formatHours = (item: string) => {
    const date = new Date(item);
    const hours = date.getHours().toString().padStart(2, "0");
    return hours;
  };

  return (
    <div className="p-6 bg-gray-900 rounded-lg xl:w-1/2">
      <div className="mb-4 text-lg text-gray-400">Volume 24H</div>
      <div className="mb-4 text-4xl font-bold text-gray-50">
        {formatNumber(data?.volume)}
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" tickFormatter={formatHours} />
          <Tooltip />
          <Bar dataKey="value" fill="#1e90ff" animationDuration={2000} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartVolume;

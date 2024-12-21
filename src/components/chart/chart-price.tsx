/* eslint-disable @typescript-eslint/no-explicit-any */
import { XAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { useContext, useEffect, useState} from 'react';
import { DataContext } from '../../context.provider';
import dataIndex from "../../data/data-index.json";


const ChartPrice = () => {
    const { coinData } = useContext(DataContext);    
    const coinDataMain = coinData['Time Series (5min)'];
    const ticker = coinData['Meta Data']['2. Symbol'];
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        if (coinDataMain) {
          const filteredData = dataIndex.top_gainers.find((item: any) => item.ticker === ticker);
          setData(filteredData);
        }
      }, [coinDataMain, ticker]);

      
    const chartData = Object.keys(coinDataMain).map(key => ({
        name: key,
        value: parseFloat(coinDataMain[key]['2. high']),
    }));

    const formatHours = (item: string) => {
        const date = new Date(item);
        const hours = date.getHours().toString().padStart(2, '0');
        return hours;
    };

    return (
        <div className="p-6 bg-gray-900 rounded-lg xl:w-1/2">
            <div className="mb-4 text-lg text-gray-400">Price</div>
            <div className="mb-4 text-4xl font-bold text-gray-50">${data.price}</div>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={chartData}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#e91e63" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="#e91e63" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" tickFormatter={formatHours} />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#e91e63"
                        strokeWidth={5}
                        fillOpacity={0.6}
                        fill="url(#colorValue)"
                        animationDuration={3000}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartPrice;
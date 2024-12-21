/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, ReactNode } from 'react';
import data1 from './data/data-nvni.json';
import data2 from './data/data-bpth.json';
import data3 from './data/data-nlspw.json';
import data4 from './data/data-prfx.json';
import data5 from './data/data-slxmw.json';

const coinDatas: { [key: string]: any } = { data1, data2, data3, data4, data5 };

interface DataContextProps {
    coinData: any;
    setCoinData: React.Dispatch<React.SetStateAction<any>>;
    switchCoinData: (symbol: string) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext<DataContextProps>({} as DataContextProps);

export const DataProvider = ({ children }: { children: ReactNode }) => {
    
    const [coinData, setCoinData] = useState<any>(coinDatas.data1);    

    const switchCoinData = (symbol: string) => {        
        for (const key in coinDatas) {
            if (coinDatas[key as keyof typeof coinDatas]['Meta Data']['2. Symbol'] === symbol) {
                setCoinData(coinDatas[key]);
                break;
            }
        }
    };

    return <DataContext.Provider value={{ coinData, setCoinData, switchCoinData }}>{children}</DataContext.Provider>;
};
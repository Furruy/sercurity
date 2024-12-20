import React, { useEffect, useState } from 'react';

const generateStockData = (): number[] => {
  const data: number[] = [];
  let price = 100;
  for (let i = 0; i < 365 * 10; i++) { 
    price += Math.random() * 10 - 5;
    data.push(price);
  }
  return data;
};

const StockChart = () => {
  const [points, setPoints] = useState<number[]>([]);

  useEffect(() => {
    setPoints(generateStockData());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(prevPoints => {
        const newPoints = prevPoints.slice(1);
        newPoints.push(newPoints[newPoints.length - 1] + (Math.random() * 10 - 5));
        return newPoints;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const pathData = points
    .map((point, index) => `${index * 0.05},${100 - point / 5}`) 
    .join(' ');

  return (
    <div className="stock-chart">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <polyline
          fill="none"
          stroke="#00ff00"
          strokeWidth="0.5"
          points={pathData}
        />
      </svg>
    </div>
  );
};

export default StockChart;

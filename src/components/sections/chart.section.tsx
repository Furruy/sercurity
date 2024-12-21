import ChartPrice from "../chart/chart-price";
import ChartVolume from "../chart/chart-volume";

const ChartSection = () => {
    return (
        <div className="flex-col mx-auto my-5 2xl:my-10 w-[100%]">
            <h1 className="text-white">Uniswap Overview</h1>

            <div className="flex flex-col gap-10 mt-10 xl:flex-row">
                <ChartPrice />
                <ChartVolume />
            </div>
        </div>
    );
};

export default ChartSection;
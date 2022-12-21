import { TbTemperature } from "react-icons/tb";
import { FiEye } from "react-icons/fi";
import { IoWaterOutline } from "react-icons/io5";
import { TbGauge } from "react-icons/tb";
import { CityType } from "@/types/CityType";

function WeatherItem({
  icon,
  title,
  value,
}: {
  icon: JSX.Element;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-layout-level2 p-4">
      <div className="mb-2 flex items-center text-sm text-content-subtle">
        {icon}
        <span className="ml-1 uppercase">{title}</span>
      </div>
      <span className="text-2xl">{value}</span>
    </div>
  );
}

export default function WeatherDetails({ data }: { data: CityType }) {
  return (
    <div className="mt-6 grid w-full grid-cols-2 gap-4">
      <WeatherItem
        icon={<TbTemperature />}
        title="feels like"
        value={`${Math.round(data.main.feels_like)}°`}
      />

      <WeatherItem
        icon={<IoWaterOutline />}
        title="humidity"
        value={`${Math.round(data.main.humidity)}%`}
      />

      <WeatherItem
        icon={<FiEye />}
        title="visibility"
        value={`${Math.round(data.visibility / 1000)} km`}
      />

      <WeatherItem
        icon={<TbGauge />}
        title="pressure"
        value={`${Math.round(data.main.pressure)} hPa`}
      />
    </div>
  );
}

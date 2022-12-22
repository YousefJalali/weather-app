import { notFound } from "next/navigation";
import Image from "next/image";
import WeatherDetails from "./WeatherDetails";

import { getCity } from "@/lib/data";
import { CityType } from "@/types/CityType";
import { constructQuery } from "@/utils/slugify";
import AddButton from "./AddButton";

export default async function Page({
  params,
  searchParams,
}: {
  params: { city: string };
  searchParams: { country: string; lat: number; lon: number };
}) {
  const data: CityType = await getCity(
    constructQuery(
      params.city,
      searchParams.country,
      searchParams.lat,
      searchParams.lon
    )
  );

  if (!data) {
    notFound();
  }

  const cookie = {
    city: params.city,
    country: searchParams.country,
    lat: searchParams.lat,
    lon: searchParams.lon,
  };

  return (
    <>
      <AddButton city={JSON.stringify(cookie)} />

      <div className="mt-6 flex w-full flex-col items-center">
        <Image
          className="h-auto w-1/2 overflow-visible object-cover"
          src={`/weather/animated/${data.weather[0].icon}.svg`}
          alt={data.weather[0].main}
          width={56}
          height={48}
        />

        <div className="-mt-8 flex w-full flex-col items-center">
          <h1 className=" truncate text-2xl">{data.name}</h1>

          <div className="mt-3 flex text-6xl font-black text-content-contrast">
            <span>{Math.round(data.main.temp)}</span>
            <span className="text-2xl">°</span>
          </div>

          <span className="text-l mt-4 block capitalize text-content-nonessential ">
            {data.weather[0].description}
          </span>

          <WeatherDetails data={data} />
        </div>
      </div>
    </>
  );
}

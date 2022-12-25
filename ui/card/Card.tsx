import { CityType } from '@/types/CityType';
import { FiNavigation, FiTrendingUp } from 'react-icons/fi';
import WeatherIcon from 'app/(home)/WeatherIcon';

// const ICONS = [
//   '01d',
//   '01n',
//   '02d',
//   '02n',
//   '03d',
//   '03n',
//   '04d',
//   '04n',
//   '09d',
//   '09n',
//   '10d',
//   '10n',
//   '11d',
//   '11n',
//   '13d',
//   '13n',
//   '50d',
//   '50n',
// ];

function Tag({
  current = false,
  popular = false,
}: {
  current?: boolean;
  popular?: boolean;
}) {
  return (
    <div className="font-hairline mb-3 flex text-sm leading-none text-brand-primary">
      <span className="mr-1">{current ? 'CURRENT LOCATION' : 'POPULAR'}</span>

      {current ? <FiNavigation /> : <FiTrendingUp />}
    </div>
  );
}

export function Card({
  city,
  current = false,
  popular = false,
}: {
  city: CityType;
  current?: boolean;
  popular?: boolean;
}) {
  return (
    <div className="rounded-xl border border-layout-level0accent bg-layout-level1 p-4">
      {current || popular ? <Tag current={current} popular={popular} /> : null}

      <div className="mb-3 flex justify-between text-content-contrast">
        <div className="max-w-[calc(100%-5rem)]">
          <span className="mb-3 block truncate text-2xl font-semibold leading-tight">
            {city.name}
          </span>

          <div className="flex text-4xl leading-none">
            <span className="text-5xl font-semibold ">
              {Math.round(city.main.temp)}
            </span>
            <span className="text-2xl">°</span>
          </div>
        </div>

        <div className="h-20 w-20 [&>svg]:h-full [&>svg]:w-full [&>svg]:overflow-visible">
          {/* <WeatherIcon code={ICONS[17]} /> */}
          <WeatherIcon code={city.weather[0].icon} />
        </div>
      </div>

      <div className="flex justify-between text-sm">
        <span className="capitalize text-utility-warning">
          {city.weather[0].description}
        </span>

        <span>
          L: {Math.round(city.main.temp_min)}° H:
          {Math.round(city.main.temp_max)}°
        </span>
      </div>
    </div>
  );
}

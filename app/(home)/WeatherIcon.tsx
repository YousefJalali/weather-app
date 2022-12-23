import * as WeatherIcons from "@/ui/illustrations";

// type Code =
//   | "01d"
//   | "01n"
//   | "02d"
//   | "02n"
//   | "03d"
//   | "03n"
//   | "04d"
//   | "04n"
//   | "09d"
//   | "09n"
//   | "10d"
//   | "10n"
//   | "11d"
//   | "11n"
//   | "13d"
//   | "13n"
//   | "50d"
//   | "50n";

const WeatherIcon = ({ code }: { code: string }) => {
  const icon = `Icon${code}`;

  //@ts-ignore
  const Icon = WeatherIcons[icon];

  return <Icon />;
};

export default WeatherIcon;

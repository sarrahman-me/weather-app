/* eslint-disable @next/next/no-img-element */
import {
  AirConditions,
  CurrentWeatherWithLocations,
} from "@/components/organisms";
import { GetDataApi } from "@/utils/api";

export default async function Home() {
  const response = await GetDataApi("http://127.0.0.1:5000/realtime-weather");

  const location = response.data.location;
  const currentWeather = response.data.current;

  return (
    <main
      className={`${
        currentWeather.is_day ? "bg-gray-100" : "bg-gray-950 text-white"
      } w-full h-screen max-w-3xl mx-auto`}
    >
      <div className="p-5 text-center">
        <p className="font-extrabold text-lg">Simple Weather App</p>
      </div>
      <CurrentWeatherWithLocations
        location={location}
        currentWeather={currentWeather}
      />
      <AirConditions currentWeather={currentWeather} />
      <div className="text-center">
        <p className="text-xs">Update terakhir {currentWeather.last_updated}</p>
      </div>
    </main>
  );
}

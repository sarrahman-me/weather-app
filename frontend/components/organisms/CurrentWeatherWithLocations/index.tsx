/* eslint-disable @next/next/no-img-element */
export default function CurrentWeatherWithLocations(props: {
  location: any;
  currentWeather: any;
}) {
  return (
    <div className={`flex justify-between flex-row p-5 md:p-10 rounded my-2`}>
      <div>
        <p className="text-xl font-bold">{props.location.name}</p>
        <p className="text-sm text-slate-600">
          {props.currentWeather.condition.text}
        </p>
        <p className="text-3xl font-bold mt-5">
          {props.currentWeather.temp_c}°
        </p>
      </div>
      <div>
        <img
          src={`https:${props.currentWeather.condition.icon}`}
          alt={"currentWeather.condition.text"}
          className="sm:w-24"
        />
      </div>
    </div>
  );
}

import { BsSun, BsMoisture, BsCloudy, BsWind } from "react-icons/bs";
import { KeyValueWithIcon } from "@/components/atoms";

export default function AirConditions(props: { currentWeather: any }) {
  return (
    <div
      className={`${
        props.currentWeather.is_day ? "bg-white" : "bg-slate-800"
      } p-2 md:p-5 shadow rounded my-2 mx-1 md:mx-4`}
    >
      <p className="md:text-lg font-semibold underline">Kondisi Udara</p>
      <div className="flex flex-col md:flex-row justify-around md:justify-around my-2">
        <div className="flex flex-col">
          <KeyValueWithIcon
            title={"Tutupan Awan"}
            value={`${props.currentWeather.cloud} %`}
            icon={<BsCloudy />}
          />
          <KeyValueWithIcon
            title={"Kecepatan Angin"}
            value={`${props.currentWeather.wind_kph} Km/jam`}
            icon={<BsWind />}
          />
        </div>
        <div className="flex flex-col">
          <KeyValueWithIcon
            title={"Tingkat UV"}
            value={props.currentWeather.uv}
            icon={<BsSun />}
          />
          <KeyValueWithIcon
            title={"Kelembapan"}
            value={`${props.currentWeather.humidity} %`}
            icon={<BsMoisture />}
          />
        </div>
      </div>
    </div>
  );
}

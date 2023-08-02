import { ReactElement } from "react";

export default function KeyValueWithIcon(props: {
  title: string;
  value: string;
  icon: ReactElement;
}) {
  return (
    <div className="m-5 flex justify-between md:block">
      <span className="inline-flex justify-center items-center">
        <div className="text-xl md:text-2xl">{props.icon}</div>
        <p className="ml-3 md:ml-5 font-medium">{props.title}</p>
      </span>
      <p className="text-center text-lg font-semibold">{props.value}</p>
    </div>
  );
}

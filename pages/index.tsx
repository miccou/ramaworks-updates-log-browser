import { useState } from "react";
import Content from "./content";
import DateBrowser from "./date-browser";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const updateSelectedDate = (e: string) => setSelectedDate(e);

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="w-screen flex-1 ">
        <Content />
      </div>
      <div className="w-screen h-fit ">
        <DateBrowser />
      </div>
    </div>
  );
}

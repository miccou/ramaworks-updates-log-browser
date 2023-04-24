import React from "react";
import Content from "../components/content";
import DateBrowser from "../components/date-browser";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="w-screen flex flex-col flex-1 ">
        <Content />
      </div>
      <div className="w-screen h-fit ">
        <DateBrowser />
      </div>
    </div>
  );
}

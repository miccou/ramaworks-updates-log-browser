import React from "react";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

let currentId = 0;

enum Months {
  "Jan" = 1,
  "Feb" = 2,
  "Mar" = 3,
  "Apr" = 4,
  "May" = 5,
  "Jun" = 6,
  "Jul" = 7,
  "Aug" = 8,
  "Sep" = 9,
  "Oct" = 10,
  "Nov" = 11,
  "Dec" = 12,
}

const ScrollToEnd = () => {
  const elementRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => elementRef.current?.scrollIntoView());
  return <div ref={elementRef} />;
};

export default function DateBrowser() {
  const { data, error } = useSWR<string>("/api/get-index", fetcher);

  var dateArray: string[] = data ? JSON.parse(data) : [];

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex flex-row w-screen h-fit overflow-x-scroll select-none">
      {dateArray
        .map((d) => d.split("/")[1].split(".")[0].split("-"))
        .map((d) => {
          return (
            <div className="flex flex-col border-solid m-2 p-0 items-center border border-stone-200 rounded-lg cursor-pointer shadow-md">
              <div className="flex flex-row gap-2 p-1 bg-emerald-100 rounded-t-md">
                <div>{d[2]}</div>
                <div>{Months[Number(d[1])]} </div>
              </div>
              <div className="bg-emerald-600 text-stone-50 w-full text-center rounded-b-md font-bold">
                {d[0]}
              </div>
            </div>
          );
        })}

      <ScrollToEnd />
    </div>
  );
}

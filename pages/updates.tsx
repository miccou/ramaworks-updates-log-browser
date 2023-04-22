import Content from "./content";
import DateBrowser from "./date-browser";

export default function Home() {
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

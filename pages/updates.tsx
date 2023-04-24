import Content from "../components/content";
import DateBrowser from "../components/date-browser";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col relative">
      <div className="w-screen flex flex-col flex-1 overflow-scroll overflow-x-clip h-fit">
        <Content />
      </div>
      <div className="w-screen h-fit bg-stone-100">
        <DateBrowser />
      </div>
    </div>
  );
}

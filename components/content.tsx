import { useRouter } from "next/router";

export default function Content() {
  const router = useRouter();
  return (
    <div className="bg-emerald-50 flex flex-1 justify-center">
      {router.query["d"] ? (
        <img className="h-fit w-fit" src={`${router.query["d"]}.jpeg`}/>
  
      ) : (
        // <div>Testing !</div>
        <div className="h-full flex-1 text-3xl text-center mt-6">Click a date below to get started</div>
      )}
    </div>
  );
}

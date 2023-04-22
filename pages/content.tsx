import { useRouter } from "next/router";

export default function Content() {
  const router = useRouter();
  console.log(router.query);

  const params = "hello world";

  return (
    <div>
      I'm content!
      <br />
      {router.query["d"]}
    </div>
  );
}

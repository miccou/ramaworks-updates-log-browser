import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function DateBrowser() {
    const { data, error } = useSWR('/api/get-index', fetcher);

      //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;

    return (
        <div>I'm date browser!<br/>{data}</div>
    )
}
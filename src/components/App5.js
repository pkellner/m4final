import { Suspense, SuspenseList } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function ShowData() {
  const { data } = useSWR(
    "https://jsonplaceholder.typicode.com/todos/2",
    fetcher,
    {
      suspense: true,
    }
  );
  return <div>{JSON.stringify(data)}</div>;
}

function App() {
  return (
    <SuspenseList revealOrder="forwards">
      <Suspense fallback={<div>Loading1</div>}>
        <ShowData />
      </Suspense>
      <Suspense fallback={<div>Loading2</div>}>
        <ShowData />
      </Suspense>
    </SuspenseList>
  );
}

export default App;

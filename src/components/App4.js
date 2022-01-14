import useSWR from "swr";
import { Suspense } from "react";

const fetcher = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("test"), 3000);
  });

const useData = () => {
  return useSWR("/api/suspense", fetcher, {
    suspense: true,
    onSuccess() {
      console.log("called");
    },
  });
};

const Data = () => {
  const { data } = useData();
  return <div>{data}</div>;
};

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading</div>}>
        <Data />
      </Suspense>
    </div>
  );
}

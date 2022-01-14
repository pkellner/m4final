import { Suspense } from "react";
import useSWR from "swr";

const fetcher = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      const ret = (
        <span>
          <b>Return</b> from Promise
        </span>
      );
      resolve(ret);
    }, 30000);
  });

function ShowData() {
  const { data } = useSWR("/api/suspense", fetcher, {
    suspense: true,
  });
  return <>{data}</>;
}

function AppFallback() {
  return (
    <span>
      <b>Return</b> from Promise Fallback
    </span>
  );
}

function App() {
  return (
    <Suspense fallback={<AppFallback />}>
      <ShowData />
    </Suspense>
  );
}

export default App;

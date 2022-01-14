import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function ShowData() {
  const [onSuccessCalled, setOnSuccessCalled] = useState("NO");
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos/2",
    fetcher,
    {
      suspense: false,
      onSuccess(data) {
        console.log("onSuccess called", data);
        setOnSuccessCalled("YES!");
      },
    }
  );
  return (
    <div>
      {JSON.stringify(data)}
      <br />
      onSuccessCalled: {onSuccessCalled}
    </div>
  );
}

function App() {
  return <ShowData />;
}

export default App;

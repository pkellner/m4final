import { Suspense, useState } from "react";
import useSWR from "swr";

const fetchWithCallback = (url, completionCallback) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const data = <div>Return from Promise</div>;
      resolve(<div>Return from Promise</div>);
      if (completionCallback) {
        completionCallback(data);
      }
    }, 3000);
  });

function ShowData() {
  const [onSuccessCalled, setOnSuccessCalled] = useState("NO");
  const [onFetcherCompletionCalled, setOnFetcherCompletionCalled] =
    useState("NO");
  const [fetchCompletionData, setFetcherCompletionData] = useState();

  const { data } = useSWR(
    "/api/suspense",
    () =>
      fetchWithCallback(`/api/suspense`, (retData) => {
        console.log("retData", retData);
        setOnFetcherCompletionCalled("YES");
        setFetcherCompletionData(retData);
      }),
    {
      suspense: true,
      onSuccess(data) {
        console.log("onSuccess called", data);
        setOnSuccessCalled("YES With Suspense");
      },
    }
  );

  return (
    <div>
      {data}
      <br />
      onSuccessCalled: {onSuccessCalled}
      <br />
      onFetcherCompletionCalled: {onFetcherCompletionCalled}
      <br />
      fetchCompletionData: {fetchCompletionData}
      <br />
    </div>
  );
}

function AppFallback() {
  return (
    <div>
      <div>FALLB</div>
    </div>
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

/*
 const { data, error } = useSwr(
      `/api/data/cities?count=${cityMax}`,() => fetcherWithCallback(`/api/data/cities?count=${cityMax}`,(cityData) => {
        console.log('CityListItems',cityData)
        setSelectedCityId(cityData[0].id);
        setSelectedCityName(cityData[0].city);
        setSele
 */

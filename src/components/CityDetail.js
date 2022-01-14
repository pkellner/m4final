import TemperatureDisplay, {
  TemperatureDisplayFallback,
} from "./TemperatureDisplay";
import DataStatsDisplay, { DataStatsDisplayFallback } from "./DataStatsDisplay";
import LastHoursDataDisplay, {
  LastHoursDataDisplayFallback,
} from "./LastHoursDataDisplay";
import { CityContext } from "../contexts/CityContext";
import { useContext, Suspense } from "react";

export const CityDetailFallback = () => {
  return (
    <div className="bg-white right-column mt-1 mb-5">
      <ul className="list-right-side">
        <li>
          <h3 className="mb-1"> City: ...</h3>
        </li>
        <br />

        <li className="list-group-item mt-1 mb-1 border-info  blue-border-rounded">
          <TemperatureDisplayFallback />
        </li>
        <br />

        <li className="list-group-item mt-1 mb-1 border-info  blue-border-rounded">
          <DataStatsDisplayFallback />
        </li>
        <br />

        <li className="list-group-item mt-1 mb-1 border-info  blue-border-rounded">
          <LastHoursDataDisplayFallback />
        </li>
        <br />
      </ul>
    </div>
  );
};

function ProcessDataAndRender() {
  const { selectedCityName, selectedCityId } = useContext(CityContext);

  // IF THE BELOW 3 LINES ARE COMMENTED OUT, THE DISPLAY SHOW MULTIPLE LastHoursDataDisplay components and not the proper fallback.
  if (!selectedCityId) {
    return <CityDetailFallback />;
  }

  return (
    <Suspense fallback={<CityDetailFallback />}>
      <div className="bg-white right-column mt-1 mb-5">
        <ul className="list-right-side">
          <li>
            <h3 className="mb-1"> City: {selectedCityName}</h3>
          </li>
          <br />

          <li className="list-group-item mt-1 mb-1 border-info  blue-border-rounded">
            {/*<Suspense fallback={<TemperatureDisplayFallback />}>*/}
            <TemperatureDisplay />
            {/*</Suspense>*/}
          </li>
          <br />

          <li className="list-group-item mt-1 mb-1 border-info  blue-border-rounded">
            {/*<Suspense fallback={<DataStatsDisplayFallback />}>*/}
            <DataStatsDisplay />
            {/*</Suspense>*/}
          </li>
          <br />

          <li className="list-group-item mt-1 mb-1 border-info  blue-border-rounded">
            <Suspense fallback={<LastHoursDataDisplayFallback />}>
              <LastHoursDataDisplay />
            </Suspense>
          </li>
          <br />
        </ul>
      </div>
    </Suspense>
  );
}

export default function CityDetail() {
  return <ProcessDataAndRender />;
}

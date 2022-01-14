import { CityContext } from "../contexts/CityContext";
import { Suspense, useContext } from "react";
import { CITYCOUNTCHOICES } from "../utils/constants";

export default function CityMaxCntDropDownList() {
  const { cityMax, setCityMax, setSelectedCityId } = useContext(CityContext);

  return (
    <Suspense
      fallback={
        <div>
          Loading With Suspense Fallback 3....(CityMaxCntDropDownList.js)...
        </div>
      }
    >
      <h3 className="mb-3">
        <select
          name="select"
          className="font-size-smaller"
          onChange={(e) => {
            setSelectedCityId(e.target.value);
            setCityMax(e.target.value);
            setSelectedCityId(undefined);
          }}
          defaultValue={cityMax.toString()}
        >
          {CITYCOUNTCHOICES.map(function (rec) {
            return (
              <option key={rec} value={rec} defaultValue={cityMax}>
                Show Top {rec} Cities
              </option>
            );
          })}
        </select>
      </h3>
    </Suspense>
  );
}

import { ISDEBUGGING } from "../utils/constants";
import AirQualityCircle from "./AirQualityCircle";

export const CityLinkButtonFallback = () => {
  return (
    <div className="row">
      <div className="col-7 ">
        name - state
        <br />
        <i className="font-size-smaller">&nbsp;&nbsp;Population: &nbsp;---</i>
      </div>
      <div className="col-2 ">&nbsp;</div>
      <div className="col-3 align-item-right">
        <AirQualityCircle />
      </div>
    </div>
  );
};

export function CityLinkButton({ cityRec, isPending = false }) {
  // console.log(
  //   `CityLinkButton: isPending:${isPending === true ? "true" : "false"}`
  // );
  return (
    <div className="row">
      <div className="col-7 ">
        {cityRec.city} - {cityRec.state}
        <br />
        <i className="font-size-smaller">
          &nbsp;&nbsp;Population:
          {cityRec.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </i>
        {ISDEBUGGING === true ? (
          <div>{JSON.stringify(cityRec, 4, `\t`)}</div>
        ) : (
          <></>
        )}
      </div>
      <div className="col-2 ">
        {isPending ? (
          <div className="spinner-border font-size-smaller" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : null}
      </div>
      <div className="col-3 align-item-right">
        <AirQualityCircle pm25={cityRec.pm25} />
      </div>
    </div>
  );
}

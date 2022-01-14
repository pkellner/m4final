import CityMaxCntDropDownList from "./CityMaxCntDropDownList";

export function TitleAndCityDropDown() {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between">
        <div className="">
          <h3>Top United States Cities Air Quality and Temperature</h3>
        </div>
        <CityMaxCntDropDownList />
      </div>
    </div>
  );
}

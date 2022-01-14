export default function Legend() {
  // used https://magic.reactjs.net/htmltojsx.htm to
  // copy this:  https://www.airnow.gov/aqi/aqi-basics/
  return (
    <table className="table table-bordered">
      <caption style={{ textAlign: "center" }}>
        <strong>AQI Basics for Ozone and Particle Pollution</strong>
      </caption>
      <thead>
        <tr style={{ background: "rgb(225, 235, 244)" }}>
          <th scope="col">Daily AQI Color</th>
          <th scope="col">Levels of Concern</th>
          <th scope="col">Values of Index</th>
          <th scope="col">Description of Air Quality</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ background: "rgb(0, 228, 0)" }}>
          <td style={{ textAlign: "center" }}>
            <strong>Green</strong>
          </td>
          <td id="good" style={{ textAlign: "center" }}>
            <strong>Good</strong>
          </td>
          <td style={{ textAlign: "center" }}>
            <strong>0 to 50</strong>
          </td>
          <td>
            <strong>
              Air quality is satisfactory, and air pollution poses little or no
              risk.
            </strong>
          </td>
        </tr>
        <tr style={{ background: "yellow" }}>
          <td style={{ textAlign: "center" }}>
            <strong>Yellow</strong>
          </td>
          <td id="mod" style={{ textAlign: "center" }}>
            <strong>Moderate</strong>
          </td>
          <td style={{ textAlign: "center" }}>
            <strong>51 to 100</strong>
          </td>
          <td>
            <strong>
              Air quality is acceptable. However, there may be a risk for some
              people, particularly those who are unusually sensitive to air
              pollution.
            </strong>
          </td>
        </tr>
        <tr style={{ background: "rgb(255, 126, 0)", color: "white" }}>
          <td style={{ textAlign: "center" }}>
            <strong>Orange</strong>
          </td>
          <td id="sens" style={{ textAlign: "center" }}>
            <strong>Unhealthy for Sensitive Groups</strong>
          </td>
          <td style={{ textAlign: "center" }}>
            <strong>101 to 150</strong>
          </td>
          <td>
            <strong>
              Members of sensitive groups may experience health effects. The
              general public is less likely to be affected.
            </strong>
          </td>
        </tr>
        <tr style={{ background: "red", color: "white" }}>
          <td style={{ textAlign: "center" }}>
            <strong>Red</strong>
          </td>
          <td id="unh" style={{ textAlign: "center" }}>
            <strong>Unhealthy</strong>
          </td>
          <td style={{ textAlign: "center" }}>
            <strong>151 to 200</strong>
          </td>
          <td>
            <strong>
              Some members of the general public may experience health effects;
              members of sensitive groups may experience more serious health
              effects.
            </strong>
          </td>
        </tr>
        <tr style={{ background: "rgb(143, 63, 151)", color: "white" }}>
          <td style={{ textAlign: "center" }}>
            <strong>Purple</strong>
          </td>
          <td id="vunh" style={{ textAlign: "center" }}>
            <strong>Very Unhealthy</strong>
          </td>
          <td style={{ textAlign: "center" }}>
            <strong>201 to 300</strong>
          </td>
          <td>
            <strong>
              Health alert: The risk of health effects is increased for
              everyone.
            </strong>
          </td>
        </tr>
        <tr style={{ background: "rgb(126, 0, 35 )", color: "white" }}>
          <td style={{ textAlign: "center" }}>
            <strong>Maroon</strong>
          </td>
          <td id="haz" style={{ textAlign: "center" }}>
            <strong>Hazardous</strong>
          </td>
          <td style={{ textAlign: "center" }}>
            <strong>301 and higher</strong>
          </td>
          <td>
            <strong>
              Health warning of emergency conditions: everyone is more likely to
              be affected.
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

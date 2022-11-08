import React from "react";
import WeatherIco from "./WeatherIco.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CurrentForecast.css";

export default function CurrentForecast(props) {
	console.log(props);
	return (
		<div className="row">
			<div className="col-md-7">
				<div className="cityTemp">
					<p id="currentTemp">{props.temp} C°</p>
				</div>
			</div>
			<div className="col-md-5">
				<div className="weatherIco">
					<WeatherIco code={props.ico} size={148} />
				</div>
			</div>
		</div>
	);
}

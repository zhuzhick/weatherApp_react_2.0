import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./CurrentWeatherData.css";

export default function CurrentWeatherData(props) {
	return (
		<div className="row">
			<div className="col-md-6">
				<p className="currentWeatherData currentWind">
					Wind {props.wind} km/h
				</p>
			</div>
			<div className="col-md-6">
				<p className="currentWeatherData currentHumidity">
					Humidity {props.humidity} %
				</p>
			</div>
		</div>
	);
}

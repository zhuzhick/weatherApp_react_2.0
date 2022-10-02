import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./CurrentWeatherData.css";

export default function CurrentWeatherData(props) {
	return (
		<div className="row">
			<div className="col-md-6">
				<p className="currentWeatherData currentWind">{props.wind}</p>
			</div>
			<div className="col-md-6">
				<p className="currentWeatherData currentHumidity">
					{props.humidity}
				</p>
			</div>
		</div>
	);
}

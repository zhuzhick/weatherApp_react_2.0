import React from "react";
import "./CurrentWeatherData.css";

export default function CurrentWeatherData() {
	return (
		<div className="row">
			<div className="col-md-6">
				<p className="currentWeatherData currentWind">
					Wind<span id="currentWindData">18 km/h</span>
				</p>
			</div>
			<div className="col-md-6">
				<p className="currentWeatherData currentHumidity">
					Humidity<span id="currentHumidityData">35%</span>
				</p>
			</div>
		</div>
	);
}

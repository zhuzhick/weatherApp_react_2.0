import React from "react";

import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
	console.log(props);

	function formatDay(timestamp) {
		let date = new Date(timestamp * 1000);
		let day = date.getDay();
		let days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];

		return days[day];
	}

	function beautifyWeek(desc) {
		let descVocablury = {
			Clear: {
				classIco: "fa-sun",
			},
			Clouds: {
				classIco: "fa-cloud",
			},
			Drizzle: {
				classIco: "fa-cloud-sun-rain",
			},
			Thunderstorm: {
				classIco: "fa-cloud-bolt",
			},
			Rain: {
				classIco: "fa-cloud-sun-rain",
			},
			Snow: {
				classIco: "fa-snowflake",
			},
			Mist: {
				classIco: "fa-smog",
			},
		};

		if (Object.keys(descVocablury).includes(desc)) {
			let icoClass = descVocablury[desc].classIco;
			return icoClass;
		}
	}

	return (
		<div className="row dayForecastOutput">
			<div className="col-md-3">
				<h3 className="dayForecastHeaderDay">
					{formatDay(props.data.dt)}
				</h3>
			</div>
			<div className="col-md-1 dayForecastIco">
				<i className="fa-solid fa-temperature-half"></i>
			</div>
			<div className="col-md-2">
				<p className="dayForecastOutput">
					{Math.round(props.data.temp.day)} C°
				</p>
			</div>
			<div class="col-md-1 dayForecastIco">
				<i className="fa-solid fa-wind"></i>
			</div>
			<div className="col-md-2">
				<p className="dayForecastOutput">
					{Math.round(props.data.wind_speed)} km/h
				</p>
			</div>
			<div className="col-md-3 dayIco">
				<i className="fa-solid "></i>
			</div>
		</div>
	);
}

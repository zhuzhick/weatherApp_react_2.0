import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	useEffect(() => {
		setLoaded(false);
	}, [props.coord]);

	function getWeekForecast(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}

	if (loaded) {
		return (
			<div className="row">
				<div className="col-md-12">
					<hr />
					<div id="weekForecastOutput">
						{forecast.map(function (dailyForecast, index) {
							if (index < 5) {
								return (
									<div key={index}>
										<WeatherForecastDay
											data={dailyForecast}
										/>
									</div>
								);
							}
						})}
					</div>
				</div>
			</div>
		);
	} else {
		let apiWeather = "c6f8ef4575250284954db9f4dfa7a996";
		let lon = props.coord.lon;
		let lat = props.coord.lat;
		let urlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiWeather}&units=metric`;
		axios.get(urlWeather).then(getWeekForecast);

		return null;
	}
}

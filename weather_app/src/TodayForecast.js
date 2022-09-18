import React from "react";
import "./TodayForecast.css";

import CurrentCity from "./CurrentCity";
import CurrentForecast from "./CurrentForecast";
import CurrentWeatherDesc from "./CurrentWeatherDesc";
import CurrentWeatherData from "./CurrentWeatherData";

export default function TodayForecast() {
	return (
		<section>
			<CurrentCity />
			<CurrentForecast />
			<CurrentWeatherDesc />
			<CurrentWeatherData />
		</section>
	);
}

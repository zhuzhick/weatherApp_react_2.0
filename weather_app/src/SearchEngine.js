import React, { useState } from "react";
import axios from "axios";
import CurrentCity from "./CurrentCity";

export default function Search(props) {
	let [city, setResult] = useState("");
	let [temp, setTemp] = useState(null);
	let [hum, setHum] = useState(null);
	let [wind, setWind] = useState(null);
	let [desc, setDesc] = useState("");
	let [ico, setIco] = useState("");

	let apiWeather = "4cd562128c73941b178c72243d5dc1c8";
	let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiWeather}&units=metric`;

	function showForecast(response) {
		setTemp(Math.round(response.data.main.temp));
		setHum(response.data.main.humidity);
		setWind(response.data.wind.speed);
		setDesc(response.data.weather[0].description);
		setIco(response.data.weather[0].icon);
	}

	function citySearch(event) {
		setResult(event.target.value);
	}

	function searchResult(event) {
		event.preventDefault();
		axios.get(urlWeather).then(showForecast);
	}

	return (
		<form id="weatherForm" onSubmit={searchResult}>
			<div className="searchField">
				<input type="search" onChange={citySearch} value={city} />
				<input type="submit" value="Search" />
			</div>
			<CurrentCity city={city} />
		</form>
	);
}

import React, { useState } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./TodayForecast.css";

import SearchForm from "./SearchForm";
import CurrentCity from "./CurrentCity";
import CurrentForecast from "./CurrentForecast";
import CurrentWeatherDesc from "./CurrentWeatherDesc";
import CurrentWeatherData from "./CurrentWeatherData";

export default function TodayForecast() {
	let [cityResult, setCityResult] = useState("");
	let [city, setCity] = useState("");
	let [temp, setTemp] = useState(null);
	let [hum, setHum] = useState(null);
	let [wind, setWind] = useState(null);
	let [desc, setDesc] = useState("");

	let apiWeather = "4cd562128c73941b178c72243d5dc1c8";
	let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityResult}&appid=${apiWeather}&units=metric`;

	function showForecast(response) {
		setCity(response.data.name);
		setTemp(Math.round(response.data.main.temp));
		setHum(response.data.main.humidity);
		setWind(Math.round(response.data.wind.speed));
		setDesc(response.data.weather[0].description);
		setCityResult("");
	}

	function citySearch(event) {
		setCityResult(event.target.value);
	}

	function searchResult(event) {
		event.preventDefault();
		axios.get(urlWeather).then(showForecast);
	}

	function inputSearch(event) {
		event.preventDefault();
		axios.get(urlWeather).then(showForecast);
	}

	function upperLetter(word) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	return (
		<section>
			<SearchForm
				citySearch={citySearch}
				inputSearch={inputSearch}
				city={cityResult}
				searchResult={searchResult}
			/>
			<CurrentCity city={upperLetter(city)} />
			<CurrentForecast temp={temp} />
			<CurrentWeatherDesc desc={upperLetter(desc)} />
			<CurrentWeatherData wind={wind} humidity={hum} />
		</section>
	);
}

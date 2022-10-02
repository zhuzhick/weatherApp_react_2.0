import React, { useState } from "react";
import axios from "axios";

import CurrentTime from "./CurrentTime";
import SearchForm from "./SearchForm";
import CurrentCity from "./CurrentCity";
import CurrentForecast from "./CurrentForecast";
import CurrentWeatherDesc from "./CurrentWeatherDesc";
import CurrentWeatherData from "./CurrentWeatherData";
import Developer from "./Developer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
	let [cityResult, setCityResult] = useState("");
	let [city, setCity] = useState("Let's know what's the weather");
	let [temp, setTemp] = useState(null);
	let [hum, setHum] = useState(null);
	let [wind, setWind] = useState(null);
	let [desc, setDesc] = useState("");

	let apiWeather = "4cd562128c73941b178c72243d5dc1c8";
	let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityResult}&appid=${apiWeather}&units=metric`;

	function showForecast(response) {
		setCity(response.data.name);
		setTemp(Math.round(response.data.main.temp) + "C°");
		setHum("Humidity " + response.data.main.humidity + "%");
		setWind("Wind " + Math.round(response.data.wind.speed) + "km/h");
		setDesc(response.data.weather[0].description);
		beautifyDay(response.data.weather[0].main.toLowerCase());
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

	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showForecastByPosition);
		} else {
			setCityResult("Geolocation is not supported by this browser.");
		}
	}

	function showForecastByPosition(position) {
		let urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiWeather}&units=metric`;
		axios.get(urlWeather).then(showForecast);
	}

	function upperLetter(word) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	function beautifyDay(desc) {
		let descVocablury = {
			clear: {
				classIco: "fa-sun",
				bgcColor: "#ffff40",
			},
			clouds: {
				classIco: "fa-cloud",
				bgcColor: "#BA55D3",
			},
			drizzle: {
				classIco: "fa-cloud-sun-rain",
				bgcColor: "#87CEFA",
			},
			thunderstorm: {
				classIco: "fa-cloud-bolt",
				bgcColor: "#7FFFD4",
			},
			rain: {
				classIco: "fa-cloud-sun-rain",
				bgcColor: "#AFEEEE",
			},
			snow: {
				classIco: "fa-snowflake",
				bgcColor: "#F0F8FF",
			},
			mist: {
				classIco: "fa-smog",
				bgcColor: "#B0C4DE",
			},
		};

		if (Object.keys(descVocablury).includes(desc)) {
			let weatherApp = document.querySelector("#weatherApp");
			let weatherIco = document.querySelector("#weatherIco");
			weatherIco.removeAttribute("class");
			weatherApp.style = `background-color: ${descVocablury[desc].bgcColor}`;
			weatherIco.classList.add("fa-solid");
			weatherIco.classList.add(descVocablury[desc].classIco);
		}
	}

	return (
		<div className="container colorAppBg" id="weatherApp">
			<CurrentTime />
			<SearchForm
				getLocation={getLocation}
				citySearch={citySearch}
				inputSearch={inputSearch}
				city={cityResult}
				searchResult={searchResult}
			/>
			<CurrentCity city={upperLetter(city)} />
			<CurrentForecast temp={temp} />
			<CurrentWeatherDesc desc={upperLetter(desc)} />
			<CurrentWeatherData wind={wind} humidity={hum} />
			<Developer />
		</div>
	);
}

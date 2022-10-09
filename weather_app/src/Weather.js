import React, { useState } from "react";
import axios from "axios";

import CurrentTime from "./CurrentTime";
import SearchForm from "./SearchForm";
import CurrentCity from "./CurrentCity";
import CurrentForecast from "./CurrentForecast";
import CurrentWeatherDesc from "./CurrentWeatherDesc";
import CurrentWeatherData from "./CurrentWeatherData";
import WeatherForecast from "./WeatherForecast";
/*import WeatherForecastDay from "./WeatherForecastDay";*/
import Developer from "./Developer";

import "./App.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);

	let apiWeather = "c6f8ef4575250284954db9f4dfa7a996";
	let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiWeather}&units=metric`;

	function showForecast(response) {
		console.log(response);
		setWeatherData({
			ready: true,
			coord: response.data.coord,
			temp: response.data.main.temp,
			hum: response.data.main.humidity,
			date: new Date(response.data.dt * 1000),
			desc: response.data.weather[0].description,
			wind: response.data.wind.speed,
			city: response.data.name,
			ico: response.data.weather[0].main.toLowerCase(),
		});
		beautifyDay(weatherData.ico);
		setCity("");
	}

	function citySearch(event) {
		setCity(event.target.value);
	}

	function searchResult(event) {
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
			setCity("Geolocation is not supported by this browser.");
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

	if (weatherData.ready) {
		return (
			<div className="container colorAppBg" id="weatherApp">
				<CurrentTime />
				<SearchForm
					getLocation={getLocation}
					citySearch={citySearch}
					inputSearch={inputSearch}
					city={city}
					searchResult={searchResult}
				/>
				<CurrentCity city={weatherData.city} />
				<CurrentForecast temp={Math.round(weatherData.temp)} />
				<CurrentWeatherDesc desc={upperLetter(weatherData.desc)} />
				<CurrentWeatherData
					wind={Math.round(weatherData.wind)}
					humidity={Math.round(weatherData.hum)}
				/>
				<WeatherForecast coord={weatherData.coord} />
				<Developer />
			</div>
		);
	} else {
		searchResult();
		return "Loading...";
	}
}

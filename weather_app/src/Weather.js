import React, { useState } from "react";
import axios from "axios";

import CurrentTime from "./CurrentTime";
import SearchForm from "./SearchForm";
import CurrentCity from "./CurrentCity";
import CurrentForecast from "./CurrentForecast";
import CurrentWeatherDesc from "./CurrentWeatherDesc";
import CurrentWeatherData from "./CurrentWeatherData";
import WeatherForecast from "./WeatherForecast";
import Developer from "./Developer";

import "./App.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);

	let apiWeather = "2718952144ed077c12e7c160fb6fc351";
	let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiWeather}&units=metric`;

	function showForecast(response) {
		setWeatherData({
			ready: true,
			coord: response.data.coord,
			temp: response.data.main.temp,
			hum: response.data.main.humidity,
			date: new Date(response.data.dt * 1000),
			desc: response.data.weather[0].description,
			wind: response.data.wind.speed,
			city: response.data.name,
			ico: response.data.weather[0].icon,
		});
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
				<CurrentForecast
					temp={Math.round(weatherData.temp)}
					ico={weatherData.ico}
				/>
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

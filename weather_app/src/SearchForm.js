import React, { useState } from "react";
import axios from "axios";
import "./SearchForm.css";

export default function SearchForm() {
	let [city, setResult] = useState("");

	let apiWeather = "4cd562128c73941b178c72243d5dc1c8";
	let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiWeather}&units=metric`;

	function showForecast(response) {
		console.log("Done");
	}

	function citySearch(event) {
		setResult(event.target.value);
	}

	function searchResult(event) {
		event.preventDefault();
		axios.get(urlWeather).then(showForecast);
	}
	return (
		<div id="searchSection" className="row">
			<div className="col-md-2 btnLocation">
				<button id="btnLocation" className="btn">
					<i className="fa-solid fa-location-dot"></i>
				</button>
			</div>
			<div className="col-md-6 searchFormField">
				<input
					id="searchFormInput"
					type="search"
					onChange={citySearch}
					value={city}
					placeholder="Search your city here"
				/>
			</div>
			<div className="col-md-2 btnSearchCity">
				<button
					id="btnSearchCity"
					onClick={searchResult}
					className="btn"
				>
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>
			</div>
		</div>
	);
}

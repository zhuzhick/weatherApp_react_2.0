import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./CurrentCity.css";

export default function CurrentCity(props) {
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"Semptember",
		"October",
		"November",
		"December",
	];
	let now = new Date();
	let currentDate = now.getDate();
	let currentMonth = months[now.getMonth()];
	let currentYear = now.getFullYear();
	let currentDay = days[now.getDay()];

	return (
		<div className="row">
			<div className="col-md-12">
				<div className="cityData">
					<h1 id="userCity">{props.city}</h1>
					<p id="currentDay">{currentDay}</p>
					<p id="currentDate">
						{currentMonth} {currentDate}, {currentYear}
					</p>
				</div>
			</div>
		</div>
	);
}

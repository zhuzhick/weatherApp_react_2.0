import React from "react";
import "./CurrentCity.css";

export default function CurrentCity(props) {
	return (
		<div className="row">
			<div className="col-md-12">
				<div className="cityData">
					<h1 id="userCity">{props.city}</h1>
					<p id="currentDay">{props.day}</p>
					<p id="currentDate">{props.time}</p>
				</div>
			</div>
		</div>
	);
}

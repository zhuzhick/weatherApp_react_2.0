import React from "react";
import "./CurrentForecast.css";

export default function CurrentForecast() {
	return (
		<div className="row">
			<div className="col-md-7">
				<div className="cityTemp">
					<p id="currentTemp">18C°</p>
				</div>
			</div>
			<div className="col-md-5">
				<div className="weatherIco">
					<i id="weatherIco" className="fa fa-sun"></i>
				</div>
			</div>
		</div>
	);
}

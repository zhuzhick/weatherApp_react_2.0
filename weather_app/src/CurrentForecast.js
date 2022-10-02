import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./CurrentForecast.css";

export default function CurrentForecast(props) {
	return (
		<div className="row">
			<div className="col-md-7">
				<div className="cityTemp">
					<p id="currentTemp">{props.temp}</p>
				</div>
			</div>
			<div className="col-md-5">
				<div className="weatherIco">
					<i id="weatherIco"></i>
				</div>
			</div>
		</div>
	);
}

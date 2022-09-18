import React from "react";
import "./CurrentWeatherDesc.css";

export default function CurrentWeatherDesc() {
	return (
		<div className="row">
			<div className="col-md-12">
				<p id="currentWeatherDesc" className="currentWeatherInfo">
					Sunny
				</p>
			</div>
		</div>
	);
}

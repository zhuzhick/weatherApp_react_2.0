import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./CurrentWeatherDesc.css";

export default function CurrentWeatherDesc(props) {
	return (
		<div className="row">
			<div className="col-md-12">
				<p id="currentWeatherDesc" className="currentWeatherInfo">
					{props.desc}
				</p>
			</div>
		</div>
	);
}

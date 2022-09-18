import React from "react";
import "./CurrentCity.css";

export default function CurrentCity() {
	return (
		<div className="row">
			<div className="col-md-12">
				<div className="cityData">
					<h1 id="userCity">Kyiv</h1>
					<p id="currentDay">Sunday</p>
					<p id="currentDate">04 Semptember 2022</p>
				</div>
			</div>
		</div>
	);
}

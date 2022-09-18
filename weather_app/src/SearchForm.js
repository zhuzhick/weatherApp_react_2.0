import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
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
					placeholder="Search your city here"
				/>
			</div>
			<div className="col-md-2 btnSearchCity">
				<button id="btnSearchCity" className="btn">
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>
			</div>
		</div>
	);
}

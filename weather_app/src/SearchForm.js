import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchForm.css";

export default function SearchForm(props) {
	return (
		<div id="searchSection" className="row">
			<div className="col-md-2 btnLocation">
				<button
					id="btnLocation"
					className="btn"
					onClick={props.getLocation}
				>
					<i className="fa-solid fa-location-dot"></i>
				</button>
			</div>
			<div className="col-md-6 searchFormField">
				<form onSubmit={props.inputSearch}>
					<input
						id="searchFormInput"
						type="search"
						onChange={props.citySearch}
						value={props.city}
						placeholder="Search your city here"
					/>
				</form>
			</div>
			<div className="col-md-2 btnSearchCity">
				<button
					id="btnSearchCity"
					onClick={props.searchResult}
					className="btn"
				>
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>
			</div>
		</div>
	);
}

import React from "react";

import Weather from "./Weather";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
	return (
		<section>
			<Weather defaultCity={"Kyiv"} />
		</section>
	);
}

import CurrentTime from "./CurrentTime";
import TodayForecast from "./TodayForecast";
import Developer from "./Developer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
	return (
		<div className="container colorAppBg" id="weatherApp">
			<CurrentTime />
			<TodayForecast />
			<Developer />
		</div>
	);
}

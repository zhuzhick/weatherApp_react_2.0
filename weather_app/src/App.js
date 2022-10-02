import CurrentTime from "./CurrentTime";
import SearchForm from "./SearchForm";
import TodayForecast from "./TodayForecast";
import Developer from "./Developer";
import SearchEngine from "./SearchEngine";

import "./App.css";

export default function App() {
	return (
		<div className="container colorAppBg" id="weatherApp">
			<SearchEngine />
			<CurrentTime />
			<SearchForm />
			<TodayForecast />
			<Developer />
		</div>
	);
}

import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./CurrentTime.css";

export default function CurrentTime() {
	let now = new Date();
	let currentHours = now.getHours();
	let currentMin = now.getMinutes();
	if (currentHours < 10) {
		currentHours = `0${currentHours}`;
	}

	if (currentMin < 10) {
		currentMin = `0${currentMin}`;
	}

	return (
		<div className="row">
			<div className="col-md-6">
				<div id="currentTime">
					<p className="currentTimeOutPut">
						{currentHours}:{currentMin}
					</p>
				</div>
			</div>
		</div>
	);
}

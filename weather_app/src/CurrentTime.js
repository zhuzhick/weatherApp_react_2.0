import React from "react";
import "./CurrentTime.css";

export default function CurrentTime() {
	return (
		<div className="row">
			<div className="col-md-6">
				<div id="currentTime">
					<p className="currentTimeOutPut">12:12</p>
				</div>
			</div>
		</div>
	);
}

import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Developer.css";

export default function Developer() {
	return (
		<footer className="row">
			<div className="col-md-12">
				<hr className="hide" />
				<h5 className="developer">
					<a href="https://github.com/zhuzhick/weatherApp_react_2.0">
						Open-source code
					</a>
					by A.Holtseva
				</h5>
			</div>
		</footer>
	);
}

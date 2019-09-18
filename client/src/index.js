/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import $ from "axios";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

// const API = {
// 	saveExample: function(example) {
// 		return $.ajax({
// 			headers: {
// 				"Content-Type": "application/json"
// 			},
// 			type: "POST",
// 			url: "api/user",
// 			data: JSON.stringify(example)
// 		});
// 	}
// };
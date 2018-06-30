"use strict";

// JSX = Javascript XML


var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		" Indecission App"
	),
	" ",
	React.createElement(
		"p",
		null,
		"Here is your options"
	),
	React.createElement(
		"ol",
		null,
		React.createElement(
			"li",
			null,
			"Item One"
		),
		React.createElement(
			"li",
			null,
			"Item Two"
		)
	),
	React.createElement("form", null),
	React.createElement("input", { type: "text", name: "option" }),
	React.createElement(
		"button",
		null,
		"Add Option"
	)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

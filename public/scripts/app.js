'use strict';

console.log('App.js is running..!!');

// JSX = Javascript XML


var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		' Does this change..! '
	),
	' ',
	React.createElement(
		'p',
		null,
		'Adding new Items'
	),
	React.createElement('ol', null),
	React.createElement(
		'li',
		null,
		'Hello'
	),
	React.createElement(
		'li',
		null,
		'Hi'
	),
	React.createElement(
		'li',
		null,
		'Wasuup'
	)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

var template1 = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'What is your first name..!!'
	),
	React.createElement(
		'h1',
		null,
		'What is your last name..!!'
	)
);

var myAppRoot = document.getElementById('myApp');

ReactDOM.render(template1, myAppRoot);

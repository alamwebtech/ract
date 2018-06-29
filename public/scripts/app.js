'use strict';

console.log("app is runing..!!");

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

var user = {
	name: 'Arun',
	age: 25,
	location: 'Lowell'
};

function getLocation(location) {
	if (location) {
		return React.createElement(
			'p',
			null,
			' Location: ',
			location
		);
	}
}

var userName = 'My name is Shafiq';
var userAge = 32;

var template1 = React.createElement(
	'div',
	null,
	React.createElement(
		'h2',
		null,
		' User Name: ',
		user.name ? user.name : "Unknown Person"
	),
	React.createElement(
		'h2',
		null,
		'Age: ',
		user.age
	),
	getLocation(user.location)
);

var myAppRoot = document.getElementById('myApp');

ReactDOM.render(template1, myAppRoot);

console.log('App.js is running..!!')

// JSX = Javascript XML


var template = (	
	<div>
	<h1> Does this change..! </h1> <p>Adding new Items</p>
	<ol>
	</ol>
	<li>Hello</li>
	<li>Hi</li>
	<li>Wasuup</li>
	
    </div>
			   );
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

var user = {
	name: 'Arun', 
	age: 25,
	location: 'Lowell'
}

var userName = 'My name is Shafiq';
var userAge = 32;

var template1 = (
<div>
	<h2>{user.name}</h2>
	<h2>Age: {user.age}</h2>
	<h1>Location:{user.location}</h1>
	<h1>What is your last name..!!</h1>
	</div>
);

var myAppRoot = document.getElementById('myApp');

ReactDOM.render(template1,myAppRoot);
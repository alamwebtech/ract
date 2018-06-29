console.log("app is runing..!!");

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

function getLocation(location){
	if(location){
		return <p> Location: {location}</p>
	}
}

var userName = 'My name is Shafiq';
var userAge = 32;

var template1 = (
    <div>
	<h2> User Name: {user.name ? user.name : "Unknown Person"}</h2>
	<h2>Age: {user.age}</h2>
	{getLocation(user.location)}
	</div>
);

var myAppRoot = document.getElementById('myApp');

ReactDOM.render(template1,myAppRoot);
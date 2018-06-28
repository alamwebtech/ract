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

var template1 = (
<div>
	<h1>What is your first name..!!</h1>
	<h1>What is your last name..!!</h1>
	</div>
);

var myAppRoot = document.getElementById('myApp');

ReactDOM.render(template1,myAppRoot);
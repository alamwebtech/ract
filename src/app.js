console.log("app is runing..!!");

// JSX = Javascript XML


const template = (	
	<div>
	<h1> Does this change..! </h1> <p>Adding new Items</p>
	<ol>
	</ol>
	<li>Hello</li>
	<li>Hi</li>
	<li>Wasuup</li>
	
    </div>
			   );

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

const user = {
	name: 'Arun', 
	age: 25,
	location: 'Lowell'
}

function getLocation(location){
	return <p> Location: {user.location ? user.location : "Location Unknown..!!"}</p>;
}



const template1 = (
    <div>
	<h2> User Name: {user.name ? user.name : "Unknown Person"}</h2>
	<h2>Age: {user.age}</h2>
	{getLocation(user.location)}
	</div>
);

const myAppRoot = document.getElementById('myApp');

ReactDOM.render(template1,myAppRoot);

// JSX = Javascript XML


const template = (	
	<div>
	<h1> Indecission App</h1> <p>Here is your options</p>
	<ol>
	
	<li>Item One</li>
	<li>Item Two</li>
	</ol>
	<form>
	
	</form>
	 <input type="text"  name="option"/>
	 <button>Add Option</button>
    </div>
			   );
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
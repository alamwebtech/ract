
// JSX = Javascript XML

console.log("App is Running..!!");

const app = {
	title: 'Indecission App',
	subtitle: 'Put your life in the handsof a computer',
	options: []

};


const onFormSubmit = (e) => {
	e.preventDefault();
	
	const option = e.target.elements.option.value;
	
	if(option){
		app.options.push(option);
		e.target.elements.option.value = "";
	}
	
	render();
	
};


const onRemoveAll = () =>{
	app.options =[];
	render();
};


const appRoot = document.getElementById('app');

const numbers = [55, 101, 100];



const render = ()=>{
	const template = (	
	<div>
	<h1>{app.title}</h1>
    {app.subtitle &&<p>{app.subtitle}</p>}

 <p>{app.options.length>0 ? 'Here is your options' : 'No Options'}</p>
	
	<p>{app.options.length}</p>
		
		<button onClick={onRemoveAll}>Remove All</button>
		
		{
		   numbers.map((number) => {
		    return <p key={number}> Number: {number}</p>;
	       })
		}
	
	<ol>
	<li>Item One</li>
	<li>Item Two</li>
	</ol>
		
	<form onSubmit={onFormSubmit}>
	<input type="text"  name="option"/>
	 <button>Add Option</button>
	</form>
	 
    </div>
			   );
	ReactDOM.render(template, appRoot);
};

render();
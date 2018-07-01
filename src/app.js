class IndecissionApp extends  React.Component{
	render(){
		return (
		<div>
			<Header />
			<Action />
			<Options />
			<AddOption />
			
			
		</div>
			);
	}
}


class Header extends React.Component{
	render (){
		return (
		<div>
			<h1>Indecission</h1>
			<h2>Put your life in the hands of a Computer</h2>
		</div>
		
		
		);
	}
}

class Action extends React.Component {
	render(){
		return (
		<button>What Should I Do ?</button>
			
		);
	}
}


class Options extends React.Component{
	render(){
		return (
		
		<div>
			Options Component Here ..!!
			<Option />
			
		</div>
		
		
		);
		
	}
}


class Option extends React.Component {
	render(){
		return (
		
		<div>
			Rendering from OPTION
			
		</div>
		
		
		);
	}
}
	
	
	
	
	
class AddOption extends React.Component {
	render(){
		return (
			<div>
			   AddOptions component here
						

			</div>
		);
	}
}



ReactDOM.render(<IndecissionApp />, document.getElementById ('app'));
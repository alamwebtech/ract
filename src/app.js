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

const jsx =(

<div>
	
	<Header />
	<Action />
	<Options />
	<AddOption />
</div>
);

ReactDOM.render(jsx, document.getElementById ('app'));
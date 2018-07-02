class IndecissionApp extends  React.Component{
	render(){
		
		const title = 'Indecission';
		const subtitle = 'Put your life in the hands of a Computer';
		const options = ['Thing one', 'Thing two', 'Thing three'];
		
		return (
		<div>
			<Header title={title} subtitle={subtitle} />
			<Action />
			<Options options = {options}/>
			<AddOption />
			
			
		</div>
			);
	}
}


class Header extends React.Component{
	render (){
		return (
		<div>
			<h1>{this.props.title}</h1>
			<h2>{this.props.subtitle}</h2>
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


class Options extends React.Component {
	render(){
		return (
		
		<div>
			{
				this.props.options.map((option) => <Option key={option} optionText={option} />)
			}
			
		</div>
		
		
		);
		
	}
}


class Option extends React.Component {
	render(){
		return (
		
		<div>
			{this.props.optionText}
			
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
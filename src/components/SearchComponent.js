import React from 'react';

export default class SearchComponent extends React.Component{
	constructor(props){
		super(props)
		this.handleInput = this.handleInput.bind(this)
		this.apiKey = 'a36cefcd44cc8b31da854e9cbba97f10'
		this.state={
			city : ''
		}
	}

	async handleInput(e){
		const request = await fetch(``)
		const response = await request.json()
		console.log(response);
	
	}
	
	render(){
		return(
			<div className="search" style={{position: 'absolute', margin: '10px', zIndex: 9999}}>
				<div className="search-box">
					<input type="text" className="search-input-control" name="location" onChange={this.handleInput}/>
				</div>
				<div>
					<ul className="list-group">
						<li className="list-group-item"></li>
					</ul>
				</div>
			</div>
		)
	}
}
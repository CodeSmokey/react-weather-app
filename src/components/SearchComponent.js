import React from 'react';

export default class SearchComponent extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="search-box">
				<input type="text" className="search-input-control" name="location" />
			</div>
		)
	}
}
import React from 'react'

export default class Header extends React.Component{
	constructor(props){
		super(props)
		
	}

	render(){
		const date = new Date();
		let image;
		let bg;
		
		if(this.props.weather === 'Clear'){
			bg = '#40b1f7'
			image = <img src="/clear.svg" className="img-responsive"/>
		}
		return(
			<section className="hero-section" style={{ backgroundColor: bg}}>
				<div className="container">
					<div className="row centeredRow">
						<div className="col-lg-6 col-sm-12 d-flex justify-content-centera align-items-center">
							<img src="/location-pin.svg" style={{minHeight: '3rem'}}/>
							<div className="header-title text-center">
								<h1 className="h1 text-white">
									{this.props.name}
								</h1>
								<h3 className="h3 text-white">
									{ date.toDateString() }
								</h3>
								<h2 className="text-white">
									{this.props.feelsLike}
								</h2>
							</div>
						</div>
						<div className="col-lg-6 col-sm-12 text-center">
							{ image }
						</div>
					</div>
				</div>
			</section>
		)
	}
}
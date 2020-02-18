import React from 'react'

export default class Header extends React.Component{
	constructor(props){
		super(props)
		
	}

	render(){
		const date = new Date();
		let image;
		let bg;
		

		switch(this.props.weather){
			case('Clear'):
				bg = '#40b1f7'
				image = <img src="/clear.svg" className="img-responsive"/>
				break;
			case('Clouds'):
				bg ='#969696'
				image = <img src="/clouds.svg" className="img-responsive"/>
				break;
			case('Snow'):
				bg = '#adbbcc'
				image = <img src="/snow.svg" className="img-responsive"/>
				break;
			case('Rain'):
				bg = '#7298a5'
				image = <img src="/rain.svg" className="img-responsive"/>
				break;
			case('Thunderstorm'):
				bg = '#203d4c'
				image = <img src="/thunder.svg" className="img-responsive"/>
				break;
		}


		return(
			<section className="hero-section" style={{ backgroundColor: bg}}>
				<div className="container">
					<div className="row centeredRow">
						<div className="col-lg-6 col-sm-12">
							<div className="city-content">
								{/* <img src="/location-pin.svg"/> */}
								<div className="loc-pin"></div>
								<div>
										<h1 className="h1 text-white">
										{this.props.name}
									</h1>
									<h3 className="h3 text-white">
										{ date.toDateString() }
									</h3>
								
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-sm-12 text-center">
							{ image }
							{/* Test */}
						</div>
					</div>
				</div>
			</section>
		)
	}
}
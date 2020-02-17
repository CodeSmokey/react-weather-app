import React from 'react';

export default class InfoSection extends React.Component{
	constructor(props){
		super(props)

	}
	
	render(){
		return(
			<section className="info-section">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<h1 className="h1 monstb" style={ {fontSize: '7rem'} }>{ Math.round(this.props.temp) - 273 }° <span className="text-danger">C</span></h1>
							<h5 class="text-uppercase monstb text-muted mb-5"><strong>{this.props.description}</strong></h5>
							<div className="row">
								<div className="col-md-6 col-sm-6">
									<small class="monstb text-uppercase text-muted">Minimum Temperature</small>
									<br/>
									<strong class="h4 monstb font-size-large">{ Math.round( this.props.min) - 273 }</strong>
								</div>
								<div className="col-md-6 col-sm-6">
									<small class="monstb text-uppercase text-muted">Maximum Temperature</small>
									<br/>
									<strong class="h4 monstb font-size-large">{ Math.round( this.props.max) - 273 }</strong>
								</div>
							</div>
						</div>
						&nbsp;
						&nbsp;
						<div className="col-md-12 text-left">
							<h2>DETAILS</h2>
						</div>
						<div className="col-md-12">
							<div className="table-responsive">
								<table className="table">
									<tr>
										<td>
											<small class="monstb text-uppercase text-muted">Wind</small>
											<br/>
											<strong class="h4 monstb font-size-large">{ this.props.wind.speed } km/hr </strong>
										</td>
										<td>
											<img src="/icon-wind.svg" className="img-responsive" />
										</td>
									</tr>
									<tr>
										<td>
											<small class="monstb text-uppercase text-muted">Direction</small>
											<br/>
											<strong class="h4 monstb font-size-large">{ this.props.wind.deg }° </strong>
										</td>
										<td>
											<img src="/icon-compass.svg" className="img-responsive" />
										</td>
									</tr>
									<tr>
										<td>
											<small class="monstb text-uppercase text-muted">Pressure</small>
											<br/>
											<strong class="h4 monstb font-size-large">{ this.props.pressure } bar</strong>
										</td>
										<td>
											<img src="/icon-pressure.svg" className="img-responsive" />
										</td>
									</tr>
									<tr>
										<td>
											<small class="monstb text-uppercase text-muted">Humidity</small>
											<br/>
											<strong class="h4 monstb font-size-large">{ this.props.humidity } <small>hPa</small></strong>
										</td>
										<td>
											<img src="/icon-humidity.svg" className="img-responsive" />
										</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
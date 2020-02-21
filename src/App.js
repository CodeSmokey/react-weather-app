import React from 'react';

import Header from './page/Header';
import InfoSection from './page/InfoSection';


export default class App extends React.Component{
	constructor(props){
		super(props)
		this.apiKey = 'd3d4795acbce4f4c24ba49d529c2c460'
		this.handleSearch = this.handleSearch.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.state = {
			lat: '',
			long: '',
			city: 'LOADING...',
			weather: {
				id: 0,
				main: 'LOADING...',
				description: 'LOADING...'
			},
			main: {
				current: 0,
				feelsLike: 0,
				max: 0,
				min: 0,
				pressure: 'LOADING...',
				humidity: 'LOADING...'
			},
			wind:{
				speed: 'LOADING...',
				deg: 'LOADING...',
			},
			cityName: '',
			searchOver: false,
			newLat: '',
			newLong: '',
			searchInput: '',

		}
		this.flat = ''
		this.flong = ''
		this.locAvailable = true
	}

	componentDidMount(){
		this.getLocation()
	}

	getLocation(){
		navigator.geolocation.getCurrentPosition(loc => {
			this.getWeatherData(loc.coords.latitude, loc.coords.longitude);
		});

	}
	async getWeatherData(latitude, longitude){
			const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&appid=${this.apiKey}`)
			const data = await response.json()
			this.setState({
				city: `${data.name}, ${data.sys.country}`,
				weather: {
					id: data.weather[0].id,
					main: data.weather[0].main,
					description: data.weather[0].description
				},
				main: {
					current: data.main.temp,
					feelsLike: data.main.feels_like,
					max: data.main.temp_max,
					min: data.main.temp_min,
					pressure: data.main.pressure,
					humidity: data.main.humidity
				},
				wind:{
					speed: data.wind.speed,
					deg: data.wind.deg,
				},
				searchOver: false
			})
			// console.log({handler: 'weathersearchHandler Check', status: this.state.searchOver})
	}
	async handleSearch(e){
		this.setState({searchOver: false, searchInput: e.target.value})

		const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${this.apiKey}`)
		const data = await request.json();

		if(data.cod === 200){
			this.locAvailable = true
			this.flat = await data.coord.lat
			this.flong = await data.coord.lon
			this.setState({
				cityName: `${data.name}, ${data.sys.country}`,
				searchOver: true
			})
		}else{
			this.locAvailable = false;
			this.setState({
				cityName: data.message,
				searchOver: true
			})
			setTimeout(()=>{!this.locAvailable ? this.setState({searchOver: false}) : this.setState({searchOver: true})}, 3000)
		}
		// console.log({handler: 'searchHandler Check', status: this.state.searchOver})
	}

	async handleClick(e){
		this.setState({searchOver: false, searchInput: ''})
		if(this.locAvailable){
			this.getWeatherData(this.flat, this.flong)
		}else{
			alert('Invalid City Name');
		}
		// console.log({handler: 'clickHandler Check', status: this.state.searchOver})
	}

	render(){
		console.log({method: 'render()' , status: this.state.searchOver})
		let check = this.state.searchOver
		let element
		if( check ){
			console.log({handler: 'render Check', status: check})
			element = 	<div style={{padding:'10px', background: '#fff', borderRadius: '3px', margin: '10px 10px 0 10px'}}>
							<a href="#" className="text-dark" onClick={this.handleClick}>
								<h4 style={{margin: '0'}}>{this.state.cityName}</h4>
							</a>
						</div>
		}else{
			element = ''
		}
		return(
			<div>
				<div className="search" style={{position: 'absolute', margin: '10px', zIndex: 9999}}>
					<div className="search-box">
						<input type="text" className="search-input-control" name="location" value={this.searchInput} onChange={this.handleSearch}/><div id="searchIcon"></div>
					</div>
					{ element }
				</div>
				<Header
					name={this.state.city}
					weather={this.state.weather.main}
					feelsLike={this.state.main.feelsLike - 273}
				/>
				<InfoSection 
					temp={this.state.main.current}
					wind={this.state.wind}
					description={this.state.weather.description}
					feelsLike={this.state.main.feelsLike}
					max={this.state.main.max}
					min={this.state.main.min}
					pressure={this.state.main.pressure}
					humidity={this.state.main.humidity}
				/>
			</div>
		)
	}
}
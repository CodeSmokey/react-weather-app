import React, { Fragment } from 'react';
import { BrowserRouter, Swich } from 'react-router-dom';

import Header from './page/Header';
import InfoSection from './page/InfoSection';

export default class App extends React.Component{
	constructor(props){
		super(props)
		this.apiKey = 'd3d4795acbce4f4c24ba49d529c2c460'
		this.state = {
			lat: '',
			long: '',
			flat: '36.5211728',
			flong: '46.2100519',
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
			}

		}
		this.locAvailable = true	
	}

	componentDidMount(){
		this.getLocation()
	}

	getLocation(){
		navigator.geolocation.getCurrentPosition(loc => {
			// this.getWeatherData(loc.coords.latitude, loc.coords.longitude);
			this.getWeatherData( this.state.flat, this.state.flong);
		});

	}
	async getWeatherData(latitude, longitude){
			const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&appid=${this.apiKey}`)
			const data = await response.json()
			this.setState({
				city: data.name,
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
				}
			})
	}


	render(){
		return(
			<div>
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
'use strict';
import React, { Component } from 'react';

function Today(props) {
	return (<div className="wethear-now inline-items">
		<div className="temperature-sensor">{props.current}</div>
		<div className="max-min-temperature">
			<span>{props.low}</span>
			<span>{props.high}</span>
		</div>
		<svg className="olymp-weather-partly-sunny-icon"><use xlinkHref="/icons/icons-weather.svg#olymp-weather-partly-sunny-icon"></use></svg>
	</div>)
}

function Description(props) {
	return (<div className="wethear-now-description">
		<div className="climate">{props.climate}</div>
		<span>Real Feel: <span>{props.current}</span></span>
		<span>Chance of Rain: <span>{props.chance}</span></span>
	</div>)
}

function Day(props) {
	return (<li>
		<div className="day">{props.day}</div>
		<svg className={props.climateclass}><use xlinkHref={props.icon}></use></svg>
		<div className="temperature-sensor-day">{props.temperature}</div>
	</li>)
}

function Forecast(props) {
	return (<ul className="weekly-forecast">
		<Day day='sun' climateclass="olymp-weather-sunny-icon" icon="/icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°" />
		<Day day='mon' climateclass="olymp-weather-sunny-icon" icon="/icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°" />
		<Day day='tue' climateclass="olymp-weather-sunny-icon" icon="/icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°" />
		<Day day='wed' climateclass="olymp-weather-sunny-icon" icon="/icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°" />
		<Day day='thu' climateclass="olymp-weather-sunny-icon" icon="/icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°" />
		<Day day='fri' climateclass="olymp-weather-sunny-icon" icon="/icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°" />
		<Day day='sat' climateclass="olymp-weather-sunny-icon" icon="/icons/icons-weather.svg#olymp-weather-sunny-icon" temperature="60°" />
	</ul>)

}

function Date(props) {
	return (<div className="date-and-place">
		<h5 className="date">{props.date}</h5>
		<div className="place">{props.location}</div>
	</div>)
}

class Weathear extends Component {
	componentDidMount() {
		//this.props.getWeather()
	}

	render() {
		return (
			<div className="ui-block">
				<div className="widget w-wethear">
					<a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="/icons/icons.svg#olymp-three-dots-icon"></use></svg></a>
					<Today current='23°' /*{this.props.weather_info.cod}*/ low='18°' high='30°' />
					<Description climate='Partly Sunny' current='24°' chance='20%' />
					<Forecast />
					<Date date='Saturday, March 26th' location='San Francisco, CA' />
				</div>
			</div>
		);
	}
}

export default Weathear;
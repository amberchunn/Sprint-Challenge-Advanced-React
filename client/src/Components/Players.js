import React, { Component } from 'react';
import Flags from './Flags';
import { useLocalStore } from '../Hooks/useLocalStore';
import { fetchPlayers } from '../services';

class Players extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
	}
	componentDidMount() {
		fetch(`http://localhost:5000/api/players`)
			.then((res) => res.json())
			.then((data) => {
				this.setState({ data });
			});
	}
	render() {
		// TODO: Create logic to filter players list by selected country

		// selectCountryHandler = (event) => {
		// 	event.preventDefault();

		// 	this.setFlag({
		// 		country: country.filter((item) => {
		// 			return item.country ==
		// 		}),
		// 	});
		// };

		const playerList = this.state.data.map((person) => {
			return (
				<li key={person.id} flag={person.country}>
					{person.name}
				</li>
			);
		});
		return (
			<div className="players-cont">
				<h1>Players</h1>
				<Flags country={this.state.data.country} />
				<ul className="player-list" data-testid="">
					{playerList}
				</ul>
			</div>
		);
	}
}

export default Players;

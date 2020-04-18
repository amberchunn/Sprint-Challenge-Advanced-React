import React, { useEffect, Component } from 'react';
import { useLocalStore } from '../Hooks/useLocalStore';

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
				this.setState([(data: data)]);
			});
		return () => {};
	}

	render() {
		return (
			<div className="players-cont">
				<h1>Players</h1>
			</div>
		);
	}
}

export default Players;

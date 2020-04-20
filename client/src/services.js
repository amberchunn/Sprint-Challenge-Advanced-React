export const fetchPlayers = () => {
	fetch(`http://localhost:5000/api/players`).then((res) => res.json());
	// .then((data) => {
	// 	this.setState({ data });
	// });
};

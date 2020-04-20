import React from 'react';
import ReactDOM from 'react-dom';
import { render, waitFor, screen } from '@testing-library/react';
// import nock from 'nock';
import Players from './Players';
// import { fetchPlayers } from '../services';

let container = null;

// jest.mock('../services.js');

beforeEach(() => {
	// Render to
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	// Cleaning up
	// nock.restore();
	container.remove();
	container = null;
});

it('renders without crashing', () => {
	ReactDOM.render(<Players />, container);
});

// test('loads players list', async () => {
// 	// const players = [
// 	// 	{ name: 'Alex Morgan', country: 'United States', searches: 100 },
// 	// 	{ name: 'Kosovare Asllani', country: 'Sweden', searches: 6 },
// 	// ];
// 	const { findByText } = render(<Players data={players} />);
// 	// const list = getNodeText(container.querySelector('ul'));
// 	await expect(data).toBeDefined();
// 	// await expect(screen.findByText('USA')).toBeInTheDocument();
// });

// test('players list loads', async () => {
// 	expect.assertions(1);

// 	const scope = nock('http://localhost:5000')
// 		.get('/api/players')
// 		.query(true)
// 		.reply(200, 'Got Data');

// 	fetchPlayers.mockResolvedValue({ args: { players } });
// 	const { findByText } = render(<Players />);
// 	expect(scope.isDone()).toBe(true);
// 	// await waitFor(() => {
// 	// 	for (const player of players) {
// 	// 		expect(findByText(player)).toBeInTheDocument();
// 	// 	}
// 	// });
// });

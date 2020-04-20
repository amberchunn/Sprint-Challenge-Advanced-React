import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Players from './Players';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Players />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test('data returns player object properties', async () => {
	const list = {
		name: 'Amber Chunn',
		country: 'United States',
		searches: 1000,
	};
	expect(list).toHaveProperty('name');
	expect(list).toHaveProperty('country');
	expect(list).toHaveProperty('searches');
});

import React from 'react';
import ReactDOM from 'react-dom';
import Flags from './Flags';
import { render, fireEvent, waitForElement } from '@testing-library/react';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Flags />, div);
	ReactDOM.unmountComponentAtNode(div);
});
// describe('Flags', () => {
// 	const fakeFetch = {
// 		get: jest.fn(() => Promise.resolve({ country: 'USA' })),
// 	};
// 	beforeEach(() => {
// 		Object.defineProperty(
// 			window,
// 			'localStorage',
// 			{
// 				value: {
// 					getItem: jest.fn(() => null),
// 					setItem: jest.fn(() => null),
// 				},
// 				writable: true,
// 			},
// 			100
// 		);
// 	});

// 	test('country selection should be in local storage', () => {
// 		render(<Flags fetch={fakeFetch} />);
// 		expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
// 	}, 50);
// });

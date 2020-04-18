import { useState } from 'react';

export const useLocalStore = (key, initialVal) => {
	const [data, setData] = useState([]);

	return [data, setData];
};

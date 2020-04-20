import { useState } from 'react';

export const useLocalStore = (key, initialVal) => {
	const [localData, setLocalData] = useState(() => {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : initialVal;
	});
	const setData = (val) => {
		setLocalData(val);
		window.localStorage.setItem(key, JSON.stringify(val));
	};
	return [localData, setData];
};

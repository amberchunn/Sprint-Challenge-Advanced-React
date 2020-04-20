import React, { useEffect } from 'react';
import { useLocalStore } from '../Hooks/useLocalStore';

const Flags = (country) => {
	const [flag, setFlag] = useLocalStore('Pick a Country');

	useEffect(() => {
		const dropMenu = document.getElementById('flagSelect');
		if (dropMenu) {
			setFlag({ country: dropMenu.value });
		} else {
			return flag;
		}
	}, [flag]);

	return (
		<form>
			<select id="flagSelect">
				<option value={'USA'}>USA</option>
				<option value={'Canada'}>Canada</option>
			</select>
		</form>
	);
};
export default Flags;

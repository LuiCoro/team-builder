import React, { useState } from 'react';

import team from './Components/Data';

console.log(team);

const defaultValues = [
	{
		name: '',
		age: '',
		role: '',
		email: '',
	},
];

console.log(defaultValues);
const App = () => {
	return (
		<div>
			<form>
				<label>
					Name: <input />
				</label>
				<label>
					Age: <input />
				</label>
				<label>
					Role: <input />
				</label>
				<label>
					Email: <input />
				</label>
			</form>
		</div>
	);
};

export default App;

import React, { useState } from 'react';

import team from './Components/Data';
import Members from './Components/Members';

console.log(team);

const defaultValues = {
	name: '',
	age: '',
	role: '',
	email: '',
};

console.log(defaultValues);

const App = () => {
	const [teamList, setTeamList] = useState([]);

	const [formValues, setFormValues] = useState(defaultValues);
	return (
		<div>
			<h1>Hello worrld</h1>

			{team.map(user => {
				return <Members />;
			})}
		</div>
	);
};

export default App;

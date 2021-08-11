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
	const [teamList, setTeamList] = useState(team);

	const [formValues, setFormValues] = useState(defaultValues);
	return (
		<div>
			<h1>Team Members</h1>

			{teamList.map(user => {
				return <Members key={user.email} info={user} />;
			})}
		</div>
	);
};

export default App;

import React, { useState } from 'react';

import team from './Components/Data';
import Members from './Components/Members';
import MemberForm from './Components/MemberForm';

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

	const updateForm = (inputName, inputValue) => {
		const newMember = {
			...formValues,
			[inputName]: inputValue,
		};

		setFormValues(newMember);
	};

	const subitForm = () => {
		const newTeamMember = {
			name: formValues.name.trim(),
			role: formValues.role.trim(),
			email: formValues.email.trim(),
			age: formValues.age.trim(),
		};

		const noName = !newTeamMember.name;
		const noEmail = !newTeamMember.email;
		const noRole = !newTeamMember.role;
		const noAge = !newTeamMember.age;

		if (noName || noAge || noEmail || noRole) return;

		const newUser = [...teamList, newTeamMember];
		setTeamList(newUser);
		setFormValues(defaultValues);
	};

	return (
		<div>
			<h1>Team Members</h1>
			<MemberForm values={formValues} update={updateForm} submit={subitForm} />

			{teamList.map(user => {
				return <Members key={user.email} info={user} />;
			})}
		</div>
	);
};

export default App;

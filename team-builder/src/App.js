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
	const [formValues, setFormValues] = useState(defaultValues);
	const [teamList, setTeamList] = useState(team);

	console.log('Team List', teamList);
	console.log('Form Values', formValues);
	return (
		<div>
			<form>
				<label>
					Name: <input type='text' name='Name' placeholder='Enter Name' />
				</label>
				<label>
					Age: <input type='number' name='Age' placeholder='Enter Age' />
				</label>
				<label>
					Role: <input type='text' name='Role' placeholder='Enter Role' />
				</label>
				<label>
					Email: <input type='email' name='Email' placeholder='Enter Email' />
				</label>

				<button>Submit</button>
			</form>

			{teamList.map(user => {
				return (
					<div>
						<h1>{user.name}</h1>
						<h3>{user.role}</h3>
						<p>{user.age}</p>
						<p>{user.email}</p>
					</div>
				);
			})}
		</div>
	);
};

export default App;

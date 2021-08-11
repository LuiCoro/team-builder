import React from 'react';

const MemberForm = () => {
	const onChange = () => {};

	const onSubmit = () => {};

	return (
		<div>
			<h1>Enter Your Information</h1>
			<form>
				<label>
					Name :
					<input type='text' placeholder='Enter Name' name='name' />
				</label>

				<br />

				<label>
					Age:
					<input type='text' placeholder='Enter Age ' name='age' />
				</label>

				<br />

				<label>
					Role:
					<input type='text' placeholder='Enter Role ' name='role' />
				</label>

				<br />

				<label>
					Email:
					<input type='text' placeholder='Enter Email ' name='email' />
				</label>

				<br />

				<button>Submit</button>
			</form>
		</div>
	);
};

export default MemberForm;

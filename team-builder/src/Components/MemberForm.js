import React from 'react';

const MemberForm = props => {
	const { values, update, submit } = props;

	const onChange = evt => {
		const { name, value } = evt.target;
		update(name, value);
	};

	const onSubmit = evt => {
		evt.preventDefault();
		submit();
	};

	return (
		<div>
			<h1>Enter Your Information</h1>
			<form onSubmit={onSubmit}>
				<label>
					Name :
					<input
						type='text'
						placeholder='Enter Name'
						name='name'
						value={values.name}
						onChange={onChange}
					/>
				</label>

				<br />

				<label>
					Age:
					<input
						type='text'
						placeholder='Enter Age '
						name='age'
						value={values.age}
						onChange={onChange}
					/>
				</label>

				<br />

				<label>
					Role:
					<input
						type='text'
						placeholder='Enter Role '
						name='role'
						value={values.role}
						onChange={onChange}
					/>
				</label>

				<br />

				<label>
					Email:
					<input
						type='text'
						placeholder='Enter Email '
						name='email'
						value={values.email}
						onChange={onChange}
					/>
				</label>

				<br />

				<button>Submit</button>
			</form>
		</div>
	);
};

export default MemberForm;

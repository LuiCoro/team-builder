import React from 'react';

const Members = props => {
	const { info } = props;
	console.log('Our props', props);
	return (
		<div>
			<h3>Team Memeber: {info.name}</h3>
			<h5>Role: {info.role}</h5>
			<p>Age: {info.age}</p>
			<p>Email: {info.email}</p>
		</div>
	);
};

export default Members;

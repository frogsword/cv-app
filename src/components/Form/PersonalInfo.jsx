function PersonalInfo({ onFirstName }) {
	return (
		<>
			<h2>About Yourself</h2>
			<form>
				<input
					type="text"
					placeholder="First Name"
					onChange={onFirstName}></input>
				<input
					type="text"
					className="l-name"
					placeholder="Last Name"></input>
				<input
					type="text"
					placeholder="Job Title"></input>
				<input
					type="text"
					placeholder="Address"></input>
				<input
					type="phone"
					placeholder="Phone Number"></input>
				<input
					type="email"
					placeholder="Email"></input>
				<textarea placeholder="Description"></textarea>
			</form>
		</>
	);
}

export default PersonalInfo;

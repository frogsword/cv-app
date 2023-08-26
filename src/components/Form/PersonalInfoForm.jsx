function PersonalInfoForm({ onFirstName, onLastName, onJobTitle, onAddress, onPhoneNumber, onEmail, onDescription }) {
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
					placeholder="Last Name"
					onChange={onLastName}></input>
				<input
					type="text"
					placeholder="Job Title"
					onChange={onJobTitle}></input>
				<input
					type="text"
					placeholder="Address"
					onChange={onAddress}></input>
				<input
					type="phone"
					placeholder="Phone Number"
					onChange={onPhoneNumber}></input>
				<input
					type="email"
					placeholder="Email"
					onChange={onEmail}></input>
				<textarea
					placeholder="Description"
					onChange={onDescription}></textarea>
			</form>
		</>
	);
}

export default PersonalInfoForm;

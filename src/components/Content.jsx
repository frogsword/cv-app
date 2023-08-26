import { useState } from 'react';
import PersonalInfoForm from './Form/PersonalInfoForm';
import PersonalInfoPreview from './Preview/PersonalInfoPreview';

function Content() {
	const [firstName, setFirstName] = useState(null);
	const [lastName, setLastName] = useState(null);
	const [jobTitle, setJobTitle] = useState(null);
    const [address, setAddress] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [email, setEmail] = useState(null);
    const [description, setDescription] = useState(null);

	function onFirstName(event) {
		setFirstName(event.target.value);
	}

	function onLastName(event) {
		setLastName(event.target.value);
	}

	function onJobTitle(event) {
		setJobTitle(event.target.value);
	}

    function onAddress(event) {
		setAddress(event.target.value);
	}

    function onPhoneNumber(event) {
		setPhoneNumber(event.target.value);
	}

    function onEmail(event) {
		setEmail(event.target.value);
	}

    function onDescription(event) {
		setDescription(event.target.value);
	}

	return (
		<div className="content">
			<div className="cv-form">
				<PersonalInfoForm
					onFirstName={onFirstName}
					onLastName={onLastName}
					onJobTitle={onJobTitle}
                    onAddress={onAddress}
                    onPhoneNumber={onPhoneNumber}
                    onEmail={onEmail}
                    onDescription={onDescription}
				/>
				<h2>Work Experience</h2>
				<form>
					<input
						type="text"
						className="position"
						placeholder="Position"></input>
					<input
						type="text"
						className="company"
						placeholder="Company"></input>
					<label>
						Start Date:
						<input
							type="date"
							className="start-date"></input>
					</label>
					<label>
						End Date:
						<input
							type="date"
							className="end-date"></input>
					</label>
					<textarea
						className="job-description"
						placeholder="Job Description"></textarea>
					<button className="add-work-btn">Add</button>
				</form>

				<h2>Education</h2>
				<form>
					<input
						type="text"
						className="school"
						placeholder="University/School"></input>
					<input
						type="text"
						className="major"
						placeholder="Major/Area of Study"></input>
					<label>
						Graduation Date:
						<input
							type="month"
							className="graduation-year"></input>
					</label>
					<button className="add-education-btn">Add</button>
				</form>
			</div>

			<div className="cv-preview">
				<PersonalInfoPreview
					firstName={firstName}
					lastName={lastName}
					jobTitle={jobTitle}
					address={address}
					phoneNumber={phoneNumber}
					email={email}
					description={description}
				/>
			</div>
		</div>
	);
}

export default Content;

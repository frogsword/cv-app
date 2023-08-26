import { useState } from 'react';
import PersonalInfo from './Form/PersonalInfo';
import PersonalInfoPreview from './Preview/PersonalInfoPreview';

function Content() {
	const [firstName, setFirstName] = useState(null);

	function onFirstName(event) {
		setFirstName(event.target.value);
	}

	return (
		<div className='content'>
			<div className="cv-form">
                <PersonalInfo onFirstName={onFirstName}/>
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

            <div className='cv-preview'>
                <PersonalInfoPreview firstName={firstName}/>
            </div>
		</div>
	);
}

export default Content;

function PersonalInfoPreview({ firstName, lastName, jobTitle, address, phoneNumber, email, description }) {
    return (
		<div className="personal-info-container">
			<p className="preview-name">{firstName} {lastName}</p>
            <p className="preview-job">{jobTitle}</p>
            <p className="preview-address">{address}</p>
            <p className="preview-phone">{phoneNumber}</p>
            <p className="preview-email">{email}</p>
            <p className="preview-description">{description}</p>
		</div>
    )
}

export default PersonalInfoPreview;

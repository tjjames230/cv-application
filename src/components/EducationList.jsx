const EducationList = ({ isActive, onShow, education }) => {
	console.log(education);

	if (isActive) {
		return (
			<section>
				<h3>Test</h3>
				<button onClick={onShow}>Create New</button>
			</section>
		);
	}
};

export default EducationList;

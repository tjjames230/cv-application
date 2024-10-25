import Field from "./Field";
import SaveBtn from "./SaveBtn";

const EducationForm = ({ isActive, onShow, education, setEducation }) => {
	const handleSchoolChange = (e) => {
		setEducation({ ...education, school: e.target.value });
	};

	const handleStudyChange = (e) => {
		setEducation({ ...education, study: e.target.value });
	};

	const handleStartDateChange = (e) => {
		setEducation({ ...education, startDate: e.target.value });
	};

	const handleEndDateChange = (e) => {
		setEducation({ ...education, endDate: e.target.value });
	};

	return (
		<>
			{isActive ? (
				<>
					<Field
						label="School / University"
						handleInputChange={handleSchoolChange}
						detail={education.school}
					/>
					<Field
						label="Area of Study"
						handleInputChange={handleStudyChange}
						detail={education.study}
					/>
					<div className="flex gap-4">
						<Field
							className="flex flex-col gap-2 w-5/12"
							label="Start Date"
							type="date"
							handleInputChange={handleStartDateChange}
							detail={education.startDate}
						/>
						<Field
							className="flex flex-col gap-2 w-5/12"
							label="End Date"
							type="date"
							handleInputChange={handleEndDateChange}
							detail={education.endDate}
						/>
					</div>
					<SaveBtn />
				</>
			) : (
				<button onClick={onShow}>Show</button>
			)}
		</>
	);
};

export default EducationForm;

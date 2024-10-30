import { useState } from "react";
import Field from "./Field";

const EducationForm = ({
	isActive,
	setActiveIndex,
	education,
	setEducation,
}) => {
	const [tempEd, setTempEd] = useState({
		school: null,
		study: null,
		startDate: null,
		endDate: null,
	});

	const handleSchoolChange = (e) => {
		setTempEd({ ...tempEd, school: e.target.value });
	};

	const handleStudyChange = (e) => {
		setTempEd({ ...tempEd, study: e.target.value });
	};

	const handleStartDateChange = (e) => {
		setTempEd({ ...tempEd, startDate: e.target.value });
	};

	const handleEndDateChange = (e) => {
		setTempEd({ ...tempEd, endDate: e.target.value });
	};

	const handleSave = (e) => {
		e.preventDefault();
		setEducation([...education, { ...tempEd, id: crypto.randomUUID() }]);
		setActiveIndex(0);
		setTempEd({
			id: null,
			school: null,
			study: null,
			startDate: null,
			endDate: null,
		});
	};

	const handleCancel = (e) => {
		e.preventDefault();
		setActiveIndex(0);
		setTempEd({
			id: null,
			school: null,
			study: null,
			startDate: null,
			endDate: null,
		});
	};

	return (
		<>
			{isActive && (
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
					<div className="flex gap-4 justify-center">
						<button onClick={handleSave}>Save</button>
						<button onClick={handleCancel}>Cancel</button>
					</div>
				</>
			)}
		</>
	);
};

export default EducationForm;

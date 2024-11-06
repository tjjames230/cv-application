import { useEffect, useState } from "react";
import Field from "./Field";

const EducationForm = ({
	isActive,
	setActiveIndex,
	education,
	setEducation,
	editObj,
	setEditObj,
}) => {
	const [tempEd, setTempEd] = useState({
		school: null,
		study: null,
		startDate: null,
		endDate: null,
	});

	useEffect(() => {
		if (editObj) {
			setTempEd({
				school: editObj.school,
				study: editObj.study,
				startDate: editObj.startDate,
				endDate: editObj.endDate,
			});
		}
	}, [editObj]);

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
		if (!editObj) {
			setEducation([...education, { ...tempEd, id: crypto.randomUUID() }]);
		} else {
			const temp = education.map((obj) => (obj.id !== editObj.id ? obj : null)); // set temp to copy any objects that have different IDs

			for (let i = 0; i < temp.length; i++) {
				if (temp[i] == null) {
					temp[i] = { ...tempEd, id: editObj.id };
				}
			}

			setEducation([...temp]);

			// for (let i = 0; i < education.length; i++) {
			// 	if (education[i].id === editObj.id) {
			// 		setEducation([...education]);
			// 	}
			// }
		}
		setActiveIndex(0);
		setTempEd({
			id: null,
			school: null,
			study: null,
			startDate: null,
			endDate: null,
		});
		setEditObj(null);
		console.log(education);
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
		setEditObj(null);
	};

	return (
		<>
			{isActive && (
				<>
					<Field
						label="School / University"
						handleInputChange={handleSchoolChange}
						detail={editObj && editObj.school}
					/>
					<Field
						label="Area of Study"
						handleInputChange={handleStudyChange}
						detail={editObj && editObj.study}
					/>
					<div className="flex gap-4">
						<Field
							className="flex flex-col gap-2 w-5/12"
							label="Start Date"
							type="date"
							handleInputChange={handleStartDateChange}
							detail={editObj && editObj.startDate}
						/>
						<Field
							className="flex flex-col gap-2 w-5/12"
							label="End Date"
							type="date"
							handleInputChange={handleEndDateChange}
							detail={editObj && editObj.endDate}
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

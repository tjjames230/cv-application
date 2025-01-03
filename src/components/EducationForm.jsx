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
						maxLength={40}
					/>
					<Field
						label="Area of Study"
						handleInputChange={handleStudyChange}
						detail={editObj && editObj.study}
						maxLength={40}
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
						<button
							className="text-sm text-white bg-blue-500 border-blue-500 border-solid border-2 hover:bg-gray-200 hover:text-blue-500 rounded-full px-6 py-1"
							onClick={handleSave}
						>
							Save
						</button>
						<button
							className="text-sm text-red-500 border-red-500 border-solid border-2 hover:bg-red-500 hover:text-white rounded-full px-6 py-1"
							onClick={handleCancel}
						>
							Cancel
						</button>
					</div>
				</>
			)}
		</>
	);
};

export default EducationForm;

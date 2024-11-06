import { useState, useEffect } from "react";
import Field from "./Field";

const ExperienceForm = ({
	isActive,
	setActiveIndex,
	experience,
	setExperience,
	editObj,
	setEditObj,
}) => {
	const [tempEx, setTempEx] = useState({
		company: null,
		title: null,
		startDate: null,
		endDate: null,
	});

	useEffect(() => {
		if (editObj) {
			setTempEx({
				company: editObj.company,
				title: editObj.title,
				startDate: editObj.startDate,
				endDate: editObj.endDate,
			});
		}
	}, [editObj]);

	const handleCompanyChange = (e) => {
		setTempEx({ ...tempEx, company: e.target.value });
	};

	const handleTitleChange = (e) => {
		setTempEx({ ...tempEx, title: e.target.value });
	};

	const handleStartDateChange = (e) => {
		setTempEx({ ...tempEx, startDate: e.target.value });
	};

	const handleEndDateChange = (e) => {
		setTempEx({ ...tempEx, endDate: e.target.value });
	};

	const handleSave = (e) => {
		e.preventDefault();
		if (!editObj) {
			setExperience([...experience, { ...tempEx, id: crypto.randomUUID() }]);
		} else {
			const temp = experience.map((obj) =>
				obj.id !== editObj.id ? obj : null
			); // set temp to copy any objects that have different IDs

			for (let i = 0; i < temp.length; i++) {
				if (temp[i] == null) {
					temp[i] = { ...tempEx, id: editObj.id };
				}
			}

			setExperience([...temp]);
		}
		setActiveIndex(0);
		setTempEx({
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
		setTempEx({
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
						label="Company Name"
						handleInputChange={handleCompanyChange}
						detail={editObj && editObj.company}
					/>
					<Field
						label="Job Title"
						handleInputChange={handleTitleChange}
						detail={editObj && editObj.title}
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

export default ExperienceForm;

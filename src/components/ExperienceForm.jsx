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
		duties: null,
		startDate: null,
		endDate: null,
	});

	useEffect(() => {
		if (editObj) {
			setTempEx({
				company: editObj.company,
				title: editObj.title,
				duties: editObj.duties,
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

	const handleDutiesChange = (e) => {
		setTempEx({ ...tempEx, duties: e.target.value });
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
			duties: null,
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
			duties: null,
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
						maxLength={40}
					/>
					<Field
						label="Job Title"
						handleInputChange={handleTitleChange}
						detail={editObj && editObj.title}
						maxLength={40}
					/>
					<div className="flex flex-col w-full gap-2">
						<label htmlFor="duties">Job Responsibilities</label>
						<textarea
							name="duties"
							id="duties"
							rows={4}
							cols={50}
							onChange={handleDutiesChange}
							defaultValue={editObj && editObj.duties}
						></textarea>
					</div>
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

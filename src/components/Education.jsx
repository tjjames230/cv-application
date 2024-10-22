import Field from "./Field";
import SaveBtn from "./SaveBtn";

const Education = ({ isActive, onShow, education, setEducation }) => {
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
		<section className="bg-slate-300 p-5 flex flex-col gap-4">
			<h3 className="text-xl font-bold text-center">Education</h3>
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
		</section>
	);
};

export default Education;

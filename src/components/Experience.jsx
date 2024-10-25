import Field from "./Field";
import SaveBtn from "./SaveBtn";

const Experience = ({ isActive, onShow, experience, setExperience }) => {
	const handleCompanyChange = (e) => {
		setExperience({ ...experience, company: e.target.value });
	};

	const handleTitleChange = (e) => {
		setExperience({ ...experience, title: e.target.value });
	};

	const handleStartDateChange = (e) => {
		setExperience({ ...experience, startDate: e.target.value });
	};

	const handleEndDateChange = (e) => {
		setExperience({ ...experience, endDate: e.target.value });
	};

	return (
		<section className="bg-slate-300 p-5 flex flex-col gap-4">
			<h3 className="text-xl font-bold text-center">Experience</h3>
			{isActive ? (
				<>
					<Field
						label="Company Name"
						handleInputChange={handleCompanyChange}
						detail={experience.company}
					/>
					<Field
						label="Job Title"
						handleInputChange={handleTitleChange}
						detail={experience.title}
					/>
					<div className="flex gap-4">
						<Field
							className="flex flex-col gap-2 w-5/12"
							label="Start Date"
							type="date"
							handleInputChange={handleStartDateChange}
							detail={experience.startDate}
						/>
						<Field
							className="flex flex-col gap-2 w-5/12"
							label="End Date"
							type="date"
							handleInputChange={handleEndDateChange}
							detail={experience.endDate}
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

export default Experience;

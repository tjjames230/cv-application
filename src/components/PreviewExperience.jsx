import formatDate from "../utils/formatDate";

const PreviewExperience = ({ experience }) => {
	const listExperience = experience.map((experienceItem) => {
		return (
			<div key={experienceItem.id} className="flex flex-col gap-1">
				<div className="flex justify-between items-center">
					<h3 className="font-bold">{experienceItem.company}</h3>
					{experienceItem.startDate && experienceItem.endDate && (
						<p className="text-sm align-bottom">
							{formatDate(experienceItem.startDate)} -{" "}
							{formatDate(experienceItem.endDate)}
						</p>
					)}
				</div>
				<p className="italic">{experienceItem.title}</p>
				<p>{experienceItem.duties}</p>
			</div>
		);
	});

	return (
		<section className="flex flex-col gap-4 p-6">
			<h2 className="text-center text-lg">
				{listExperience.length > 0 && "EXPERIENCE"}
			</h2>
			{listExperience}
		</section>
	);
};

export default PreviewExperience;

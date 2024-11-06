import formatDate from "../utils/formatDate";

const PreviewExperience = ({ experience }) => {
	const listExperience = experience.map((experienceItem) => {
		return (
			<div key={experienceItem.id}>
				<h3>{experienceItem.company}</h3>
				<p>{experienceItem.title}</p>
				{experienceItem.startDate && (
					<p>{formatDate(experienceItem.startDate)}</p>
				)}
				{experienceItem.endDate && <p>{formatDate(experienceItem.endDate)}</p>}
			</div>
		);
	});

	return <section className="p-4">{listExperience}</section>;
};

export default PreviewExperience;

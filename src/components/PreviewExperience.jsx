import formatDate from "../utils/formatDate";

const PreviewExperience = ({ experience }) => {
	return (
		<>
			<h3>{experience.company}</h3>
			<p>{experience.title}</p>
			<p>{experience.startDate && formatDate(experience.startDate)}</p>
			<p>{experience.endDate && formatDate(experience.endDate)}</p>
		</>
	);
};

export default PreviewExperience;

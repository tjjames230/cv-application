import formatDate from "../utils/formatDate";

const PreviewEducation = ({ education }) => {
	return (
		<>
			<h3>{education.school}</h3>
			<p>{education.study}</p>
			{education.startDate && <p>{formatDate(education.startDate)}</p>}
			{education.endDate && <p>{formatDate(education.endDate)}</p>}
		</>
	);
};

export default PreviewEducation;

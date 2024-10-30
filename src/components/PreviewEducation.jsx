import formatDate from "../utils/formatDate";

const PreviewEducation = ({ education }) => {
	const listEducation = education.map((educationItem) => {
		return (
			<div key={educationItem.id}>
				<h3>{educationItem.school}</h3>
				<p>{educationItem.study}</p>
				{educationItem.startDate && (
					<p>{formatDate(educationItem.startDate)}</p>
				)}
				{educationItem.endDate && <p>{formatDate(educationItem.endDate)}</p>}
			</div>
		);
	});

	return <section>{listEducation}</section>;
};

export default PreviewEducation;

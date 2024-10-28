import formatDate from "../utils/formatDate";

const PreviewEducation = ({ education }) => {
	const example = [
		{
			title: "test title",
			study: "test study",
			startDate: "test date",
			endDate: "test enddate",
		},
		{
			title: "test title",
			study: "test study",
			startDate: "test date",
			endDate: "test enddate",
		},
	];

	const listEducation = education.map((educationItem) => {
		return (
			<div key={educationItem.study}>
				<h3>test</h3>
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

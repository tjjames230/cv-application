import formatDate from "../utils/formatDate";

const PreviewEducation = ({ education }) => {
	const listEducation = education.map((educationItem) => {
		return (
			<div key={educationItem.id} className="flex flex-col gap-1">
				<div className="flex justify-between items-center">
					<h3 className="font-bold">{educationItem.school}</h3>
					{educationItem.startDate && educationItem.endDate && (
						<p className="text-sm align-bottom">
							{formatDate(educationItem.startDate)} -{" "}
							{formatDate(educationItem.endDate)}
						</p>
					)}
				</div>
				<p className="italic">{educationItem.study}</p>
			</div>
		);
	});

	return (
		<section className="flex flex-col gap-4 p-6">
			<h2 className="text-center text-lg">
				{listEducation.length > 0 && "EDUCATION"}
			</h2>
			{listEducation}
		</section>
	);
};

export default PreviewEducation;

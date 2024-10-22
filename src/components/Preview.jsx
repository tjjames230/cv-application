import PreviewDetails from "./PreviewDetails";
import PreviewEducation from "./PreviewEducation";
import PreviewExperience from "./PreviewExperience";

const Preview = ({ details, education, experience }) => {
	return (
		<div className="w-6/12 h-auto max-h-[600px] bg-gray-100">
			<PreviewDetails details={details} />
			<PreviewEducation education={education} />
			<PreviewExperience experience={experience} />
		</div>
	);
};

export default Preview;

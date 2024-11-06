import PreviewDetails from "./PreviewDetails";
import PreviewEducation from "./PreviewEducation";
import PreviewExperience from "./PreviewExperience";

const Preview = ({ details, education, experience }) => {
	return (
		<div className="flex flex-col w-6/12 h-auto bg-gray-100">
			<PreviewDetails details={details} />
			<PreviewExperience experience={experience} />
			<PreviewEducation education={education} />
		</div>
	);
};

export default Preview;

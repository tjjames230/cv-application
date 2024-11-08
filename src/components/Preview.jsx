import PreviewDetails from "./PreviewDetails";
import PreviewEducation from "./PreviewEducation";
import PreviewExperience from "./PreviewExperience";

const Preview = ({ details, education, experience }) => {
	return (
		<section className="flex flex-col w-6/12 bg-gray-100 drop-shadow-md">
			<PreviewDetails details={details} />
			<PreviewExperience experience={experience} />
			<PreviewEducation education={education} />
		</section>
	);
};

export default Preview;

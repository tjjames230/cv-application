import PreviewDetails from "./PreviewDetails";

const Preview = ({ details }) => {
	return (
		<div className="w-6/12 h-auto max-h-[600px] bg-gray-100">
			<PreviewDetails details={details} />
		</div>
	);
};

export default Preview;

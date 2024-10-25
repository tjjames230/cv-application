import AddNewBtn from "./AddNewBtn";

const EducationList = ({ isActive, onShow, education }) => {
	const handleNew = () => {
		console.log("test");
	};

	if (isActive) {
		return (
			<section>
				<h3></h3>
				<AddNewBtn onSubmit={handleNew} />
			</section>
		);
	}
};

export default EducationList;

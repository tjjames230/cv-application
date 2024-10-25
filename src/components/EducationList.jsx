import AddNewBtn from "./AddNewBtn";

const EducationList = ({ isActive, onShow, education }) => {
	if (isActive) {
		return (
			<section>
				<h3></h3>
				<AddNewBtn />
			</section>
		);
	}
};

export default EducationList;

import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";

const Form = () => {
	return (
		<form className="bg-slate-300 p-5 flex flex-col gap-8 w-8/12">
			<PersonalDetails />
			<Education />
			<Experience />
		</form>
	);
};

export default Form;

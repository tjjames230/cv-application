import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import { useState } from "react";

const Form = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<form className="flex flex-col gap-8 w-8/12">
			<PersonalDetails
				isActive={activeIndex === 0}
				onShow={() => setActiveIndex(0)}
			/>
			<Education
				isActive={activeIndex === 1}
				onShow={() => setActiveIndex(1)}
			/>
			<Experience
				isActive={activeIndex === 2}
				onShow={() => setActiveIndex(2)}
			/>
		</form>
	);
};

export default Form;

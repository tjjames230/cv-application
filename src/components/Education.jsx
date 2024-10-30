import { useState } from "react";
import EducationList from "./EducationList";
import EducationForm from "./EducationForm";

const Education = ({ isActive, onShow, education, setEducation }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section className="bg-slate-300 p-5 flex flex-col gap-4">
			<h3 className="text-xl font-bold text-center">Education</h3>
			{isActive ? (
				<>
					<EducationList
						isActive={activeIndex === 0}
						onShow={() => setActiveIndex(1)}
						education={education}
						setEducation={setEducation}
					/>
					<EducationForm
						isActive={activeIndex === 1}
						setActiveIndex={setActiveIndex}
						education={education}
						setEducation={setEducation}
					/>
				</>
			) : (
				<button onClick={onShow}>Show</button>
			)}
		</section>
	);
};

export default Education;

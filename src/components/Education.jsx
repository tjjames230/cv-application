import { useState } from "react";
import EducationList from "./EducationList";
import EducationForm from "./EducationForm";

const Education = ({ isActive, onShow, education, setEducation }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [editObj, setEditObj] = useState(null);

	return (
		<section className="p-5 flex flex-col gap-6">
			<h3 className="text-xl font-bold text-center">Education</h3>
			{isActive ? (
				<>
					<EducationList
						isActive={activeIndex === 0}
						onShow={() => setActiveIndex(1)}
						education={education}
						setEducation={setEducation}
						setEditObj={setEditObj}
					/>
					<EducationForm
						isActive={activeIndex === 1}
						setActiveIndex={setActiveIndex}
						education={education}
						setEducation={setEducation}
						editObj={editObj}
						setEditObj={setEditObj}
					/>
				</>
			) : (
				<button
					className="text-white bg-gray-700 border-solid border-2 hover:border-gray-700 hover:text-gray-700 hover:bg-gray-200 rounded-full py-1"
					onClick={onShow}
				>
					Show
				</button>
			)}
		</section>
	);
};

export default Education;

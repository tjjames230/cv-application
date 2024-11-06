import { useState } from "react";
import ExperienceForm from "./ExperienceForm";
import ExperienceList from "./ExperienceList";

const Experience = ({ isActive, onShow, experience, setExperience }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [editObj, setEditObj] = useState(null);

	return (
		<section className="bg-slate-300 p-5 flex flex-col gap-4">
			<h3 className="text-xl font-bold text-center">Experience</h3>
			{isActive ? (
				<>
					<ExperienceList
						isActive={activeIndex === 0}
						onShow={() => setActiveIndex(1)}
						experience={experience}
						setExperience={setExperience}
						setEditObj={setEditObj}
					/>
					<ExperienceForm
						isActive={activeIndex === 1}
						setActiveIndex={setActiveIndex}
						experience={experience}
						setExperience={setExperience}
						editObj={editObj}
						setEditObj={setEditObj}
					/>
				</>
			) : (
				<button onClick={onShow}>Show</button>
			)}
		</section>
	);
};

export default Experience;

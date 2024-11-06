import { useState } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";

function App() {
	const [details, setDetails] = useState({
		name: null,
		email: null,
		number: null,
		address: null,
	});

	const [education, setEducation] = useState([]);

	const [experience, setExperience] = useState([]);

	return (
		<>
			<h2 className="text-3xl font-bold text-center">CV Generator</h2>
			<main>
				<Form
					details={details}
					setDetails={setDetails}
					education={education}
					setEducation={setEducation}
					experience={experience}
					setExperience={setExperience}
				/>
				<Preview
					details={details}
					education={education}
					experience={experience}
				/>
			</main>
		</>
	);
}

export default App;

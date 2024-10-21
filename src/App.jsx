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

	return (
		<>
			<h2 className="text-3xl font-bold text-center">CV Application</h2>
			<main>
				<Form details={details} setDetails={setDetails} />
				<Preview details={details} />
			</main>
		</>
	);
}

export default App;

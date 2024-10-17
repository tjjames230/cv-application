import Form from "./components/Form";
import Preview from "./components/Preview";

function App() {
	return (
		<>
			<h2 className="text-3xl font-bold text-center">CV Application</h2>
			<main>
				<Form />
				<Preview />
			</main>
		</>
	);
}

export default App;

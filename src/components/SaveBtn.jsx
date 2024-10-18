const SaveBtn = ({ onSubmit }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("hi");
		if (onSubmit) {
			onSubmit();
		}
	};

	return (
		<input
			type="submit"
			value="Save"
			onClick={handleSubmit}
			className="bg-blue-500 text-white px-4 py-2 rounded"
		/>
	);
};

export default SaveBtn;

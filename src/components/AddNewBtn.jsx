const AddNewBtn = (onSubmit) => {
	const handleClick = (e) => {
		e.preventDefault();

		if (onSubmit) {
			onSubmit();
		}
	};

	return (
		<>
			<button onClick={handleClick}>Create New</button>
		</>
	);
};

export default AddNewBtn;

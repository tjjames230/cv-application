const EducationList = ({ isActive, onShow, education, setEducation }) => {
	const handleEdit = (e) => {
		e.preventDefault();
	};

	const handleDelete = (e, edItem) => {
		e.preventDefault();

		const temp = education
			.map((obj) => (obj.id !== edItem.id ? obj : null)) // set temp to copy any objects that have different IDs
			.filter((ele) => ele !== null); // remove null values from temp

		setEducation(temp);
	};

	const list = education.map((edItem) => {
		return (
			<div
				key={edItem.id}
				className="p-4 flex justify-between rounded-lg border-black border border-solid bg-white"
			>
				<h3 className="font-bold">{edItem.school}</h3>
				<div className="flex gap-10">
					<button className="text-blue-500" onClick={handleEdit}>
						Edit
					</button>
					<button
						className="text-red-500"
						onClick={(e) => handleDelete(e, edItem)}
					>
						Delete
					</button>
				</div>
			</div>
		);
	});

	if (isActive) {
		return (
			<section className="flex flex-col gap-4">
				{list}
				<button onClick={onShow}>Create New</button>
			</section>
		);
	}
};

export default EducationList;

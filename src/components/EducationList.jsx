const EducationList = ({
	isActive,
	onShow,
	education,
	setEducation,
	setEditObj,
}) => {
	const handleEdit = (e, edItem) => {
		e.preventDefault();
		setEditObj(edItem);
		onShow();
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
				className="p-4 flex justify-between items-center bg-gray-200 rounded-lg drop-shadow-md"
			>
				<h3 className="font-bold">{edItem.school}</h3>
				<div className="flex gap-4">
					<button
						className="text-sm text-gray-700 border-gray-700 border-solid border-2 hover:bg-gray-700 hover:text-white rounded-full px-6 py-1"
						onClick={(e) => handleEdit(e, edItem)}
					>
						Edit
					</button>
					<button
						className="text-sm text-red-500 border-red-500 border-solid border-2 hover:bg-red-500 hover:text-white rounded-full px-6 py-1"
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
				<button
					className="text-white bg-blue-500 border-solid border-2 hover:border-blue-500 hover:text-blue-500 hover:bg-gray-200 rounded-full py-1"
					onClick={onShow}
				>
					Create New
				</button>
			</section>
		);
	}
};

export default EducationList;

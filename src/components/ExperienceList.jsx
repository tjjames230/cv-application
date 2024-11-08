const ExperienceList = ({
	isActive,
	onShow,
	experience,
	setExperience,
	setEditObj,
}) => {
	const handleEdit = (e, exItem) => {
		e.preventDefault();
		setEditObj(exItem);
		onShow();
	};

	const handleDelete = (e, exItem) => {
		e.preventDefault();

		const temp = experience
			.map((obj) => (obj.id !== exItem.id ? obj : null)) // set temp to copy any objects that have different IDs
			.filter((ele) => ele !== null); // remove null values from temp

		setExperience(temp);
	};

	const list = experience.map((exItem) => {
		return (
			<div
				key={exItem.id}
				className="p-4 flex justify-between items-center bg-gray-200 rounded-lg drop-shadow-md"
			>
				<h3 className="font-bold">{exItem.company}</h3>
				<div className="flex gap-4">
					<button
						className="text-sm text-gray-700 border-gray-700 border-solid border-2 hover:bg-gray-700 hover:text-white rounded-full px-6 py-1"
						onClick={(e) => handleEdit(e, exItem)}
					>
						Edit
					</button>
					<button
						className="text-sm text-red-500 border-red-500 border-solid border-2 hover:bg-red-500 hover:text-white rounded-full px-6 py-1"
						onClick={(e) => handleDelete(e, exItem)}
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

export default ExperienceList;

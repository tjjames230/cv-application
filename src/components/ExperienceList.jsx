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
				className="p-4 flex justify-between rounded-lg border-black border border-solid bg-white"
			>
				<h3 className="font-bold">{exItem.company}</h3>
				<div className="flex gap-10">
					<button
						className="text-blue-500"
						onClick={(e) => handleEdit(e, exItem)}
					>
						Edit
					</button>
					<button
						className="text-red-500"
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
				<button onClick={onShow}>Create New</button>
			</section>
		);
	}
};

export default ExperienceList;

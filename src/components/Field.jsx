const Field = ({
	type = "text",
	label,
	className = "flex flex-col w-full gap-2",
}) => {
	return (
		<div className={className}>
			<label>{label}</label>
			<input
				type={type}
				className="p-2 text-sm"
				placeholder={`Enter your ${label.toLowerCase()}`}
			></input>
		</div>
	);
};

export default Field;

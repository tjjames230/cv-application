import Field from "./Field";
import SaveBtn from "./SaveBtn";

const Education = ({ isActive, onShow }) => {
	return (
		<section className="bg-slate-300 p-5 flex flex-col gap-4">
			<h3 className="text-xl font-bold text-center">Education</h3>
			{isActive ? (
				<>
					<Field label="School / University" />
					<Field label="Area of Study" />
					<div className="flex gap-4">
						<Field
							className="flex flex-col gap-2 w-5/12"
							label="Start Date"
							type="date"
						/>
						<Field
							className="flex flex-col gap-2 w-5/12"
							label="End Date"
							type="date"
						/>
					</div>
					<SaveBtn />
				</>
			) : (
				<button onClick={onShow}>Show</button>
			)}
		</section>
	);
};

export default Education;

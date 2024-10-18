import Field from "./Field";

const Education = () => {
	return (
		<section className="flex flex-col gap-4">
			<h3 className="text-xl font-bold text-center">Education</h3>
			<Field label="School / University" />
			<Field label="Area of Study" />
			<div className="flex gap-4">
				<Field className="flex flex-col gap-2 w-5/12" label="Start Date" />
				<Field className="flex flex-col gap-2 w-5/12" label="End Date" />
			</div>
		</section>
	);
};

export default Education;

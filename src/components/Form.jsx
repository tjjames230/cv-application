const Form = () => {
	return (
		<form className="bg-slate-300 p-5 flex flex-col gap-8 w-6/12">
			<section className="flex flex-col gap-4">
				<h3 className="text-xl font-bold text-center">Personal Details</h3>
				<Fields label="Full Name" />
				<Fields label="Email" />
				<Fields label="Phone Number" />
				<Fields label="Address" />
			</section>
			<section className="flex flex-col gap-4">
				<h3 className="text-xl font-bold text-center">Education</h3>
				<Fields label="School / University" />
				<Fields label="Area of Study" />
				<div className="flex w-full gap-4">
					<Fields className="w-full flex-1" label="Start Date" />
					<Fields className="w-full flex-1" label="End Date" />
				</div>
			</section>
			<section className="flex flex-col gap-4">
				<h3 className="text-xl font-bold text-center">Experience</h3>
			</section>
		</form>
	);
};

const Fields = ({ label }) => {
	return (
		<div className="flex flex-col gap-2">
			<label>{label}</label>
			<input
				className="p-2"
				placeholder={`Enter your ${label.toLowerCase()}`}
			></input>
		</div>
	);
};

export default Form;

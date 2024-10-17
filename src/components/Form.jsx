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
			<section></section>
			<section></section>
		</form>
	);
};

const Fields = ({ label }) => {
	return (
		<div className="flex flex-col gap-2">
			<label key={label}>{label}</label>
			<input
				className="p-2"
				placeholder={`Enter your ${label.toLowerCase()}`}
			></input>
		</div>
	);
};

export default Form;

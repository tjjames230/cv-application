import Field from "./Field";

const PersonalDetails = () => {
	return (
		<section className="flex flex-col gap-4">
			<h3 className="text-xl font-bold text-center">Personal Details</h3>
			<Field label="Full Name" />
			<Field label="Email" />
			<Field label="Phone Number" />
			<Field label="Address" />
		</section>
	);
};

export default PersonalDetails;

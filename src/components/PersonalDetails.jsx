import Field from "./Field";
import SaveBtn from "./SaveBtn";

const PersonalDetails = ({ isActive, onShow }) => {
	const handleSubmit = (e) => {
		console.log(e);
	};

	return (
		<section className="bg-slate-300 p-5 flex flex-col gap-4">
			<h3 className="text-xl font-bold text-center">Personal Details</h3>
			{isActive ? (
				<>
					<Field label="Full Name" />
					<Field label="Email" type="email" />
					<Field label="Phone Number" />
					<Field label="Address" />
					<SaveBtn onSubmit={handleSubmit} />
				</>
			) : (
				<button onClick={onShow}>Show</button>
			)}
		</section>
	);
};

export default PersonalDetails;

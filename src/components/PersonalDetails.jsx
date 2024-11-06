import Field from "./Field";

const PersonalDetails = ({ isActive, onShow, details, setDetails }) => {
	const handleNameChange = (e) => {
		setDetails({ ...details, name: e.target.value });
	};

	const handleEmailChange = (e) => {
		setDetails({ ...details, email: e.target.value });
	};

	const handleNumberChange = (e) => {
		setDetails({ ...details, number: e.target.value });
	};

	const handleAddressChange = (e) => {
		setDetails({ ...details, address: e.target.value });
	};

	return (
		<section className="bg-slate-300 p-5 flex flex-col gap-4">
			<h3 className="text-xl font-bold text-center">Personal Details</h3>
			{isActive ? (
				<>
					<Field
						label="Full Name"
						handleInputChange={handleNameChange}
						detail={details.name}
						maxLength={50}
					/>
					<Field
						label="Email"
						type="email"
						handleInputChange={handleEmailChange}
						detail={details.email}
						maxLength={50}
					/>
					<Field
						label="Phone Number"
						handleInputChange={handleNumberChange}
						detail={details.number}
						maxLength={14}
					/>
					<Field
						label="Address"
						handleInputChange={handleAddressChange}
						detail={details.address}
						maxLength={50}
					/>
				</>
			) : (
				<button onClick={onShow}>Show</button>
			)}
		</section>
	);
};

export default PersonalDetails;

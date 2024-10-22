import Field from "./Field";
import SaveBtn from "./SaveBtn";

const PersonalDetails = ({ isActive, onShow, details, setDetails }) => {
	const handleSubmit = () => {
		console.log(details);
	};

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
					/>
					<Field
						label="Email"
						type="email"
						handleInputChange={handleEmailChange}
						detail={details.email}
					/>
					<Field
						label="Phone Number"
						handleInputChange={handleNumberChange}
						detail={details.number}
					/>
					<Field
						label="Address"
						handleInputChange={handleAddressChange}
						detail={details.address}
					/>
					<SaveBtn onSubmit={handleSubmit} />
				</>
			) : (
				<button onClick={onShow}>Show</button>
			)}
		</section>
	);
};

export default PersonalDetails;

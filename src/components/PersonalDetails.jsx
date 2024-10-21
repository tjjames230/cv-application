import Field from "./Field";
import SaveBtn from "./SaveBtn";
import { useState } from "react";

const PersonalDetails = ({ isActive, onShow }) => {
	const [info, setInfo] = useState({
		name: null,
		email: null,
		number: null,
		address: null,
	});

	const handleSubmit = () => {
		console.log(info);
	};

	const handleNameChange = (e) => {
		setInfo({ ...info, name: e.target.value });
	};

	const handleEmailChange = (e) => {
		setInfo({ ...info, email: e.target.value });
	};

	const handleNumberChange = (e) => {
		setInfo({ ...info, number: e.target.value });
	};

	const handleAddressChange = (e) => {
		setInfo({ ...info, address: e.target.value });
	};

	return (
		<section className="bg-slate-300 p-5 flex flex-col gap-4">
			<h3 className="text-xl font-bold text-center">Personal Details</h3>
			{isActive ? (
				<>
					<Field label="Full Name" handleInputChange={handleNameChange} />
					<Field
						label="Email"
						type="email"
						handleInputChange={handleEmailChange}
					/>
					<Field label="Phone Number" handleInputChange={handleNumberChange} />
					<Field label="Address" handleInputChange={handleAddressChange} />
					<SaveBtn onSubmit={handleSubmit} />
				</>
			) : (
				<button onClick={onShow}>Show</button>
			)}
		</section>
	);
};

export default PersonalDetails;

const PreviewDetails = ({ details }) => {
	return (
		<>
			<h3>{details.name}</h3>
			<p>{details.email}</p>
			<p>{details.number}</p>
			<p>{details.address}</p>
		</>
	);
};

export default PreviewDetails;

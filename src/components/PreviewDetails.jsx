const PreviewDetails = ({ details }) => {
	return (
		<section>
			<h3>{details.name}</h3>
			<p>{details.email}</p>
			<p>{details.number}</p>
			<p>{details.address}</p>
		</section>
	);
};

export default PreviewDetails;

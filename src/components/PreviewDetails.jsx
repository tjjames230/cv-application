import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faPhone,
	faLocationPin,
} from "@fortawesome/free-solid-svg-icons";

const PreviewDetails = ({ details }) => {
	return (
		<section className="flex flex-col gap-4 p-6 items-center bg-cyan-900 text-white">
			<h3 className="text-2xl font-bold">
				{details.name && details.name.toUpperCase()}
			</h3>
			<div className="flex gap-6 w-full justify-center text-sm">
				{details.email && (
					<p className="flex gap-2 items-center">
						<FontAwesomeIcon icon={faEnvelope} />
						{details.email}
					</p>
				)}
				{details.number && (
					<p className="flex gap-2 items-center">
						<FontAwesomeIcon icon={faPhone} />
						{details.number}
					</p>
				)}
				{details.address && (
					<p className="flex gap-2 items-center">
						<FontAwesomeIcon icon={faLocationPin} />
						{details.address}
					</p>
				)}
			</div>
		</section>
	);
};

export default PreviewDetails;

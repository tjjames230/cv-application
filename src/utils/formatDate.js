// this will return the date in a format Month/Day/Year (xx/xx/xxxx)
const formatDate = (date) => {
	return `${date.substring(5, 7)}/${date.substring(8, 10)}/${date.substring(
		0,
		4
	)}`;
};

export default formatDate;

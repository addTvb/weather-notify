export const convertToDate = (unixDate) => {
	const milliseconds = unixDate * 1000;
	const dateObject = new Date(milliseconds);

	return dateObject.toLocaleString("ru").split(",")[0]; // returns only date
};

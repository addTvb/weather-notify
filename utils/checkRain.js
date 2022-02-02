export const checkRain = (dailyWeather) => {
	return dailyWeather?.find((day) => {
		if (day?.weather[0].main === "Rain") {
			return day;
		}
	});
};

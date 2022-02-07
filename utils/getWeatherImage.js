import sun from "@/public/weathers/sun.svg";
import cloudy from "@/public/weathers/cloudy.svg";
import fog from "@/public/weathers/fog.svg";
import rain from "@/public/weathers/rain.svg";
import snow from "@/public/weathers/snow.svg";
import wind from "@/public/weathers/wind.svg";

export const getWeatherImage = (weatherType) => {
	switch (weatherType) {
		case "Clouds":
			return cloudy;
		case "Fog":
			return fog;
		case "Rain":
			return rain;
		case "Snow":
			return snow;
		case "Wind":
			return wind;
		case "Clear":
			return sun;

		default:
			return sun;
	}
};

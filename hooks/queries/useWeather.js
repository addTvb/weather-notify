import { useState, useEffect } from "react";

import { useQuery } from "react-query";
import axios from "axios";

export const useWeather = () => {
	const API_KEY = "6acf1eeb5996979d905cfae66423b6a0";

	const [geoLocation, setGeoLocation] = useState({
		lat: 37.8954369,
		lon: 58.372321,
	}); // * Ashgabat by default

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				setGeoLocation({
					lat: position.coords.latitude,
					lon: position.coords.longitude,
				});
			});
		} else {
			console.log("Geolocation is not supported by this browser");
		}
	}, []);

	return useQuery(
		["current-weather"],
		async () => {
			const { data } = await axios.get(
				`https://api.openweathermap.org/data/2.5/onecall?lat=${geoLocation.lat}&lon=${geoLocation.lon}&exclude=alerts&appid=${API_KEY}&units=metric`
			);

			return data;
		},
		{
			retry: 1,
			keepPreviousData: true,
			staleTime: 60 * 1000,
		}
	);
};

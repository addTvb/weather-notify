import Image from "next/image";
import { useEffect } from "react";

import { useWeather } from "../../hooks/queries/useWeather";

import sun from "/public/sun.svg";
import styles from "./WeatherCard.module.css";

export const WeatherCard = () => {
	const { data: weather } = useWeather();

	const convertToDate = (unixDate) => {
		const milliseconds = unixDate * 1000; // 1575909015000
		const dateObject = new Date(milliseconds);

		return dateObject.toLocaleString("ru"); //2019-12-9 10:30:15}
	};

	const checkRain = (dailyWeather) => {
		return dailyWeather?.find((day) => {
			if (day?.weather[0].main === "Rain") {
				console.log(convertToDate(day?.dt));
				return day;
			}
		});
	};

	const convertToCelsius = (fahrenheit) => {
		return (fahrenheit - 32) / 1.8;
	};

	useEffect(() => {
		// console.log(
		// 	weather?.daily?.forEach((day) => {
		// 		if (day?.weather[0].main === "Rain") {
		// 			console.log("gggg", day);
		// 			return day;
		// 		}
		// 		console.log("dddd", day);
		// 		return day;
		// 	})
		// );
	}, [weather]);

	return (
		<>
			<div className={styles.weatherCard}>
				<div className={styles.cardHeader}>
					<Image src={sun} width={50} height={50} />
					<div className={styles.cardTitle}>
						<span>{weather?.current.weather[0].main}</span>
						<span>
							{weather && Math.round(weather?.current.temp)}
						</span>
					</div>
				</div>
				<div className={styles.divider}></div>
				<div className={styles.cardBottom}>
					Ближайшие осадки:
					<b>
						{weather &&
							convertToDate(checkRain(weather?.daily)?.dt)}
					</b>
				</div>
			</div>
		</>
	);
};

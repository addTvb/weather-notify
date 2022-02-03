import Image from "next/image";
import { useEffect } from "react";

import { Placeholder } from "@/components";
import { useWeather } from "@/hooks/queries/useWeather";
import { getWeatherImage } from "@/utils/getWeatherImage";
import { convertToDate } from "@/utils/convertToDate";
import { checkRain } from "@/utils/checkRain";

import styles from "./WeatherCard.module.css";

export const WeatherCard = () => {
	const { data: weather, isLoading } = useWeather();

	useEffect(() => {
		function displayNotification() {
			if (Notification.permission === "granted") {
				navigator.serviceWorker.getRegistration().then(function (reg) {
					var options = {
						body: "Here is a notification body!",
						icon: "images/example.png",
						vibrate: [100, 50, 100],
						data: {
							dateOfArrival: Date.now(),
							primaryKey: 1,
						},
					};
					reg.showNotification("Hello world!", options);
					console.log("ready");
				});
			}
		}
		displayNotification();
	}, []);

	if (isLoading) {
		return (
			<div className={styles.weatherCard}>
				<div className={styles.cardHeader}>
					<Placeholder
						width="60px"
						height="60px"
						borderRadius="1rem"
					/>
					<div className={styles.cardTitle}>
						<Placeholder width="80px" height="20px" />
						<Placeholder width="40px" height="20px" />
					</div>
				</div>
				<div className={styles.divider}></div>
				<div className={styles.cardBottom}>
					Upcoming precipitation:
					<b>
						<Placeholder width="90px" height="15px" />
					</b>
				</div>
			</div>
		);
	}

	return (
		<>
			<div className={styles.weatherCard}>
				<div className={styles.cardHeader}>
					<Image
						src={getWeatherImage(weather?.current.weather[0].main)}
						width={60}
						height={60}
					/>
					<div className={styles.cardTitle}>
						<h2>{weather?.current.weather[0].main}</h2>
						<h2>
							{weather && Math.round(weather?.current.temp)} °C
						</h2>
					</div>
				</div>
				<div className={styles.divider}></div>
				<div className={styles.cardBottom}>
					Upcoming precipitation:
					<b>
						{weather &&
							convertToDate(checkRain(weather?.daily)?.dt)}
					</b>
				</div>
			</div>
		</>
	);
};

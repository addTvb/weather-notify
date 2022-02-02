import Head from "next/head";

import { useWeather } from "@/hooks/queries/useWeather";
import { WeatherCard } from "@/components";
import { Footer } from "@/layout";

import styles from "../styles/Home.module.css";

export default function Home() {
	const { data: weather } = useWeather();

	return (
		<div className={styles.container}>
			<Head>
				<title>Weather Notify</title>
				<meta
					name="description"
					content="Weather web-app with custom notifications"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Weather - Notify☔️</h1>
				<WeatherCard />
			</main>

			<Footer />
		</div>
	);
}

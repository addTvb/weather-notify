import Head from "next/head";
import Image from "next/image";

import { useWeather } from "../hooks/queries/useWeather";
import { WeatherCard } from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
	const { data: weather } = useWeather();
	console.log({ weather });
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

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className={styles.logo}>
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer>
		</div>
	);
}

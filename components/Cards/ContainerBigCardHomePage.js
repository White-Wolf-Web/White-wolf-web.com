"use client"
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import BigCardHomePage from "./BigCardHomePage";
import { DataCardHomePage } from "../../data/DataCardHomePage";
import styles from "./Card.module.css";
import Link from "next/link";

export const ContainerBigCardHomePage = () => {
	const cardsRef = useRef([]);
	const [cardsToShow, setCardsToShow] = useState(6);
	useEffect(() => {
		const animateCards = () => {
			const cards = cardsRef.current;

			cards.forEach((card) => {
				const tl = gsap.timeline({ paused: true });

				tl.to(card, {
					duration: 0.2,
					scale: 0.95,
					boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
				}).reverse();

				card.addEventListener("mousedown", () => tl.play());
				card.addEventListener("mouseup", () => tl.reverse());
				card.addEventListener("mouseleave", () => tl.reverse());
			});
		};

		animateCards();
	}, []);

	const showMoreCards = () => {
		setCardsToShow(cardsToShow + 6);
	};
	const showLessCards = () => {
		setCardsToShow(cardsToShow - 6);
	};

	return (
		<section className={styles.allSections}>
			<h2 className={styles.containerTitle}>Articles</h2>
			<div className={styles.ourServices}>
				{Object.values(DataCardHomePage[0])
					.slice(0, cardsToShow)
					.map((card, index) => (
						<div className="col-md-4 custom-card" key={card.id} ref={(el) => (cardsRef.current[index] = el)}>
							<Link href={card.link}>
								<BigCardHomePage imgSrc={card.imgSrc} title={card.title} titleAlt={card.titleAlt} link={card.link} text={card.text} />
							</Link>
						</div>
					))}
			</div>
			<div className={styles.moreArticlesButtonContainer}>
				<button onClick={showMoreCards} className={styles.moreArticlesButton}>
					Voir +++ d&apos;articles
				</button>
				{cardsToShow > 6 && (
					<button onClick={showLessCards} className={`${styles.moreArticlesButton} ${styles.showLessCards}`}>
						Voir --- d&apos;articles
					</button>
				)}
			</div>
		</section>
	);
};

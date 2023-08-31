"use client"
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

import styles from "./Card.module.css";


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
		
			<div className={style.moreArticlesButtonContainer}>
				<button onClick={showMoreCards} className={style.moreArticlesButton}>
					Voir +++ d&apos;articles
				</button>
				{cardsToShow > 6 && (
					<button onClick={showLessCards} className={`${style.moreArticlesButton} ${styles.showLessCards}`}>
						Voir --- d&apos;articles
					</button>
				)}
			</div>
		</section>
	);
};

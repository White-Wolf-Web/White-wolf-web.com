"use client";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import CardHomePage from "./CardHomePage";
import { DataCardHomePage } from "../../data/DataCardHomePage";
import styles from "./Card.module.css";
import Image from "next/image";

export const FloatingCards = () => {
	const cardRefs = useRef([]);
	const containerRef = useRef();
	const [showFirstSection, setShowFirstSection] = useState(true);
	const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
	const cards = Object.values(DataCardHomePage[0]);
	const textRefs = useRef([]);

	const randomPath = (width, height) => {
		const points = [];
		for (let i = 0; i < 4; i++) {
			points.push({
				x: Math.random() * (width * 0.71) - (width * 0.71) / 2,
				y: Math.random() * (height * 0.8) - (height * 0.8) / 2,
			});
		}
		return points;
	};
	

	const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

	useIsomorphicLayoutEffect(() => {
		function updateContainerSize() {
			const containerWidth = containerRef.current.clientWidth || 0;
			const containerHeight = containerRef.current.clientHeight || 0;
			setContainerSize({ width: containerWidth, height: containerHeight });
		}

		window.addEventListener("resize", updateContainerSize);
		updateContainerSize();
		return () => window.removeEventListener("resize", updateContainerSize);
	}, []);

	useEffect(() => {
		const loadPlugin = async () => {
			const { MotionPathPlugin } = await import("gsap/MotionPathPlugin");
			gsap.registerPlugin(MotionPathPlugin);

			cardRefs.current = cardRefs.current.slice(0, cards.length);

			const tl = gsap.timeline({ repeat: -1 });

			cardRefs.current.forEach((card, i) => {
				const path = randomPath(containerSize.width, containerSize.height);

				const tl = gsap.timeline({
					repeat: -1,
					yoyo: true,
				});

				tl.to(card, {
					motionPath: path,
					duration: 24 + Math.random() * 4,
					ease: "power1.inOut",
				});

				gsap.set(card, {
					x: path[0].x,
					y: path[0].y,
				});
				
			});
		};

		loadPlugin();
	}, [containerSize, cards.length]);

	return (
		<div className={styles.wrapper}>
			<div ref={containerRef} className={`${styles.container} ${styles.centerContent}`}>
				<div className={styles.floatingSection}>
					{cards.map((card, i) => (
						<div key={card.id} ref={(el) => (cardRefs.current[i] = el)} className={styles.cardContainer}>
							<CardHomePage imgSrc={card.imgSrc} title={card.title2} text={card.text} link={card.link} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FloatingCards;

"use client";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import styles from "./Wolf.module.css";
import Image from "next/image";

export default function WolfSection() {
    const [showFirstSection, setShowFirstSection] = useState(true);
    const textRefs = useRef([]);
    useEffect(() => {
		const timer = setInterval(() => {
			setShowFirstSection((prev) => !prev);
		}, 12000);

		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		
		  const tl = gsap.timeline();
	  
		  textRefs.current.forEach((el, i) => {
			tl.fromTo(
			  el,
			  { autoAlpha: 0, x: "-=100" }, // initial state
			  { autoAlpha: 1, x: 0, duration: 0.5, delay: i * 0.08 } // final state
			);
		  });
		
	  }, []);
	  

	Array.from({ length: 10 }).map((_, i) => (
		<div
		  className={styles.wolfTextSection}
		  ref={(el) => (textRefs.current[i] = el)}
		  key={i}
		>
		  <p>Texte pour la case {i + 1}</p>
		</div>
	  ))
	return (
		<div>
			<h3 className={styles.howCanWeHelp}>Comment vous aider ?</h3>
			<div className={styles.wolfContainer}>
				<div className={styles.neonCard}>
					<div className={styles.wolfTextSection} ref={(el) => (textRefs.current[0] = el)}>
						<p className={styles.wolfP}>Je recherche un site web sophistiqué et de qualité</p>
					</div>
				</div>
				<div className={styles.neonCard}>
					<div className={styles.wolfTextSection} ref={(el) => (textRefs.current[1] = el)}>
						<p className={styles.wolfP}>Je désire un site qui représente fidèlement ma marque</p>
					</div>
				</div>
				<div className={styles.neonCard}>
					<div className={styles.wolfTextSection} ref={(el) => (textRefs.current[2] = el)}>
						<p className={styles.wolfP}>Je veux que mon site soit optimisé pour le mobile.</p>
					</div>
				</div>
				<div className={styles.neonCard}>
					<div className={styles.wolfTextSection} ref={(el) => (textRefs.current[3] = el)}>
						<p className={styles.wolfP}>J&apos;aimerais que mon site web attire plus de trafic.</p>
					</div>
				</div>

				<div className={styles.wolfImageSection}>
					<Image src="/Assets/Images/Webp/logowww.webp" alt="Logo de l'agence SEO WWW" width={125} height={160} className={styles.wolfCenter} />
				</div>
				<div className={styles.neonCard}>
					<div className={styles.wolfTextSection} ref={(el) => (textRefs.current[4] = el)}>
						<p className={styles.wolfP}>J&apos;ai besoin d&apos;un site web qui répond mes attentes</p>
					</div>
				</div>
				<div className={styles.neonCard}>
					<div className={styles.wolfTextSection} ref={(el) => (textRefs.current[5] = el)}>
						<p className={styles.wolfP}>Je veux un site web attrayant qui attire et retient l&apos;attention.</p>
					</div>
				</div>
				<div className={styles.neonCard}>
					<div className={styles.wolfTextSection} ref={(el) => (textRefs.current[6] = el)}>
						<p className={styles.wolfP}>Il faut que ce site reponde aux standards liés au web</p>
					</div>
				</div>
				<div className={styles.neonCard}>
					<div className={styles.wolfTextSection} ref={(el) => (textRefs.current[7] = el)}>
						<p className={styles.wolfP}>Je veux un site web qui charge rapidement & efficacement.</p>
					</div>
				</div>
				<div className={styles.neonCard}>
					<div className={styles.wolfTextSection} ref={(el) => (textRefs.current[8] = el)}>
						<p className={styles.wolfP}>Je veux un site web qui soit accessible à tous</p>
					</div>
				</div>
				<div className={styles.neonCard}>
					<div className={styles.wolfTextSection} ref={(el) => (textRefs.current[9] = el)}>
						<p className={styles.wolfP}>Je veux que mon site web soit facile à trouver sur Google.</p>
					</div>
				</div>
			</div>
		</div>
	);
}

import React from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "@/app/page.module.css";
import portfolioSkifbImac from "@/public/Assets/Images/Webp/portfolio/portfolio-skifb-IMac.webp";
import portfolioSkifbMacBook from "@/public/Assets/Images/Webp/portfolio/portfolio-skifb-MacBook.webp";
import portfolioSkifbIphone from "@/public/Assets/Images/Webp/portfolio/portfolio-skifb-IPhone.webp";
import portfolioKanapImac from "@/public/Assets/Images/Webp/portfolio/portfolioKanapIMac.webp";
import portfolioKanapMacBook from "@/public/Assets/Images/Webp/portfolio/portfolioKanapMacBook.webp";
import portfolioKanapIphone from "@/public/Assets/Images/Webp/portfolio/portfolioKanapIPhone.webp";
import portfolioRestoImac from "@/public/Assets/Images/Webp/portfolio/portfolio-restaurant-IMac.webp";
import portfolioRestoMacBook from "@/public/Assets/Images/Webp/portfolio/portfolio-restaurant-macbook.webp";
import portfolioRestoIphone from "@/public/Assets/Images/Webp/portfolio/portfolio-restaurant-Iphone.webp";

import portfolioAstroImac from "@/public/Assets/Images/Webp/portfolio/portfolio-astro-IMac.webp";
import portfolioAstroMacBook from "@/public/Assets/Images/Webp/portfolio/portfolio-astro-macbook.webp";
import portfolioAstroIphone from "@/public/Assets/Images/Webp/portfolio/portfolio-astro-Iphone.webp";
import portfolioPlatsImac from "@/public/Assets/Images/Webp/portfolio/portfolio-plats-IMac.webp";
import portfolioPlatsMacBook from "@/public/Assets/Images/Webp/portfolio/portfolio-plats-macbook.webp";
import portfolioPlatsIphone from "@/public/Assets/Images/Webp/portfolio/portfolio-plats-Iphone.webp";
import portfolioTarotImac from "@/public/Assets/Images/Webp/portfolio/portfolio-tarot-IMac.webp";
import portfolioTarotMacBook from "@/public/Assets/Images/Webp/portfolio/portfolio-tarot-macbook.webp";
import portfolioTarotIphone from "@/public/Assets/Images/Webp/portfolio/portfolio-tarot-Iphone.webp";



import nextLogo from "@/public/Assets/Icons/portfolio/portfolioNext.webp";
import bootstrapLogo from "@/public/Assets/Icons/portfolio/portfolioBootstrap.webp";
import htmlLogo from "@/public/Assets/Icons/portfolio/portfolio-HTML5.webp";
import cssLogo from "@/public/Assets/Icons/portfolio/portfolio-CSS3.webp";
import jsLogo from "@/public/Assets/Icons/portfolio/portfolio-javascript-icon.webp";
import reactLogo from "@/public/Assets/Icons/portfolio/portfolio-react.webp";
import wordpressLogo from "@/public/Assets/Icons/portfolio/portfolio-wordpress-icon.webp";

export default function portfolio() {
	return (
		<>
			<Head>
				<title>Mon Portfolio avec certaines de mes réalisations</title>
				<meta name="description" content="Vous retrouverez ici certaines de mes oeuvres web, en format responsive" />
				<link rel="canonical" href="https://www.white-wolf-web.com/portfolio" />
			</Head>
			<div className={styles.container}>
				<main className={styles.main}>
					<h1>Mon portfolio</h1>
					<section className={styles.portfolioSection}>
						<h2>SKIF Belgique</h2>

						<div className={styles.portfolioImagesMac}>
							<div className={styles.divPortfolioIMac}>
								<Image src={portfolioSkifbImac} alt="Site SKIF Belgique sur un écran d'IMac" placeholder="blur" quality={100} sizes="100vw" className={styles.portfolioIMac} />
							</div>

							<div className={styles.divPortfolioMacBook}>
								<Image src={portfolioSkifbMacBook} alt="Site SKIF Belgique (karaté) sur un écran Mac Book Pro" placeholder="blur" quality={100} sizes="100vw" className={styles.portfolioMacBook} />
							</div>

							<div className={styles.divPortfolioIPhone}>
								<Image src={portfolioSkifbIphone} alt="Site SKIF Belgique (karaté) depuis un IPhone" placeholder="blur" quality={100} sizes="100vw" className={styles.portfolioIPhone} />
							</div>
						</div>
						<div className={styles.divFrameworks}>
							<p className={styles.portfolioP}>Réalisé avec : </p>
							<Image src={nextLogo} alt="Logo de Next.js" quality={100} className={styles.portfolioFramework} />
							<Image src={bootstrapLogo} alt="Logo de Bootstrap" quality={100} className={styles.portfolioFramework} />
						</div>
					</section>

                    <section className={styles.portfolioSection}>
						<h2>Kanap</h2>

						<div className={styles.portfolioImagesMac}>
							<div className={styles.divPortfolioIMac}>
								<Image src={portfolioKanapImac} alt="Vue du Site Kanap sur un écran d'IMac" placeholder="blur" quality={100} sizes="100vw" className={styles.portfolioIMac} />
							</div>

							<div className={styles.divPortfolioMacBook}>
								<Image src={portfolioKanapMacBook} alt="Vue sur le site Kanap via un écran Mac Book Pro" placeholder="blur" quality={100} sizes="100vw" className={styles.portfolioMacBook} />
							</div>

							<div className={styles.divPortfolioIPhone}>
								<Image src={portfolioKanapIphone} alt="On peut voir le site Kanap version responsive" placeholder="blur" quality={100} sizes="100vw" className={styles.portfolioIPhone} />
							</div>
						</div>
						<div className={styles.divFrameworks}>
							<p className={styles.portfolioP}>Réalisé avec : </p>
							<Image src={htmlLogo} alt="logo de Html" quality={100} className={styles.portfolioFramework} />
							<Image src={cssLogo} alt="Logo de CSS" quality={100} className={styles.portfolioFramework} />
                            <Image src={jsLogo} alt="Le logo de Javascript" quality={100} className={styles.portfolioFramework} />
                        </div>
					</section>

                    <section className={styles.portfolioSection}>
						<h2>La Note enchantée</h2>

						<div className={styles.portfolioImagesMac}>
							<div className={styles.divPortfolioIMac}>
								<Image src={portfolioRestoImac} alt="les plats à la carte du restaurant" placeholder="blur" quality={100} sizes="100vw" className={styles.portfolioIMac} />
							</div>

							<div className={styles.divPortfolioMacBook}>
								<Image src={portfolioRestoMacBook} alt="les differenets restaurant que l'on peut choisir" placeholder="blur" quality={100} sizes="100vw" className={styles.portfolioMacBook} />
							</div>

							<div className={styles.divPortfolioIPhone}>
								<Image src={portfolioRestoIphone} alt="differentes vues sur des plats proposés" placeholder="blur" quality={100} sizes="100vw" className={styles.portfolioIPhone} />
							</div>
						</div>
						<div className={styles.divFrameworks}>
							<p className={styles.portfolioP}>Réalisé avec : </p>
							<Image src={htmlLogo} alt="le logo de Html 5" quality={100} className={styles.portfolioFramework} />
							<Image src={cssLogo} alt="Le logo de CSS 3" quality={100} className={styles.portfolioFramework} />
                        </div>
					</section>

					<section className={styles.portfolioSection}>
						<h2>Astrologie pour Tous</h2>

						<div className={styles.portfolioImagesMac}>
							<div className={styles.divPortfolioIMac}>
								<Image src={portfolioAstroImac} alt="Page d'acceuil d'un site d'astrologie" placeholder="blur" quality={100} sizes="100vw" className={styles.portfolioIMac} />
							</div>

							<div className={styles.divPortfolioMacBook}>
								<Image src={portfolioAstroMacBook} alt="article relayant la planets Jupiter" placeholder="blur" quality={100} sizes="100vw" className={styles.portfolioMacBook} />
							</div>

							<div className={styles.divPortfolioIPhone}>
								<Image src={portfolioAstroIphone} alt="le signe zodiacal du Scorpion" placeholder="blur" quality={100} sizes="100vw" className={styles.portfolioIPhone} />
							</div>
						</div>
						<div className={styles.divFrameworks}>
							<p className={styles.portfolioP}>Réalisé avec : </p>
							<Image src={wordpressLogo} alt="le logo de Wordpress" quality={100} className={styles.portfolioFramework} />
							
                        </div>
					</section>

					<section className={styles.portfolioSection}>
						<h2>Recettes de cuisine</h2>

						<div className={styles.portfolioImagesMac}>
							<div className={styles.divPortfolioIMac}>
								<Image src={portfolioPlatsImac} alt="vue sur un ensemble de recettes" placeholder="blur" quality={100} sizes="100vw" className={styles.portfolioIMac} />
							</div>

							<div className={styles.divPortfolioMacBook}>
								<Image src={portfolioPlatsMacBook} alt="salade méditéranéene" placeholder="blur" quality={100} sizes="100vw" className={styles.portfolioMacBook} />
							</div>

							<div className={styles.divPortfolioIPhone}>
								<Image src={portfolioPlatsIphone} alt="la recette du poulet coco" placeholder="blur" quality={100} sizes="100vw" className={styles.portfolioIPhone} />
							</div>
						</div>
						<div className={styles.divFrameworks}>
							<p className={styles.portfolioP}>Réalisé avec : </p>
							<Image src={reactLogo} alt="le logo de Wordpress" quality={100} className={styles.portfolioFramework} />
							
                        </div>
					</section>


					<section className={styles.portfolioSection}>
						<h2>Cours de Tarot</h2>

						<div className={styles.portfolioImagesMac}>
							<div className={styles.divPortfolioIMac}>
								<Image src={portfolioTarotImac} alt="Page d'acceuil d'un site d'astrologie" placeholder="blur" quality={100} sizes="100vw" className={styles.portfolioIMac} />
							</div>

							<div className={styles.divPortfolioMacBook}>
								<Image src={portfolioTarotMacBook} alt="article relayant la planets Jupiter" placeholder="blur" quality={100} sizes="100vw" className={styles.portfolioMacBook} />
							</div>

							<div className={styles.divPortfolioIPhone}>
								<Image src={portfolioTarotIphone} alt="le signe zodiacal du Scorpion" placeholder="blur" quality={100} sizes="100vw" className={styles.portfolioIPhone} />
							</div>
						</div>
						<div className={styles.divFrameworks}>
							<p className={styles.portfolioP}>Réalisé avec : </p>
							<Image src={wordpressLogo} alt="le logo de Wordpress" quality={100} className={styles.portfolioFramework} />
							
                        </div>
					</section>
				</main>
			</div>
		</>
	);
}

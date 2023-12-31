import React from "react";
import Image from "next/image";
import styles from "@/app/page.module.css";
import Link from "next/link";
import { Metadata } from "next";
import portfolioSkifbImac from "@/public/Assets/Images/Webp/portfolio/portfolio-skifb-IMac.webp";
import portfolioSkifbMacBook from "@/public/Assets/Images/Webp/portfolio/portfolio-skifb-MacBook.webp";
import portfolioSkifbIphone from "@/public/Assets/Images/Webp/portfolio/portfolio-skifb-Iphone.webp";
import portfolioKanapImac from "@/public/Assets/Images/Webp/portfolio/portfolioKanapIMac.webp";
import portfolioKanapMacBook from "@/public/Assets/Images/Webp/portfolio/portfolioKanapMacBook.webp";
import portfolioKanapIphone from "@/public/Assets/Images/Webp/portfolio/portfolioKanapIPhone.webp";
import portfolioRestoImac from "@/public/Assets/Images/Webp/portfolio/portfolio-restaurant-IMac.webp";
import portfolioRestoMacBook from "@/public/Assets/Images/Webp/portfolio/portfolio-restaurant-macbook.webp";
import portfolioRestoIphone from "@/public/Assets/Images/Webp/portfolio/portfolio-restaurant-Iphone.webp";
import portfolioAstroImac from "@/public/Assets/Images/Webp/portfolio/portfolio-astro-Imac.webp";
import portfolioAstroMacBook from "@/public/Assets/Images/Webp/portfolio/portfolio-astro-macbook.webp";
import portfolioAstroIphone from "@/public/Assets/Images/Webp/portfolio/portfolio-astro-Iphone.webp";
import portfolioPlatsImac from "@/public/Assets/Images/Webp/portfolio/portfolio-plats-Imac.webp";
import portfolioPlatsMacBook from "@/public/Assets/Images/Webp/portfolio/portfolio-plats-macbook.webp";
import portfolioPlatsIphone from "@/public/Assets/Images/Webp/portfolio/portfolio-plats-Iphone.webp";
import portfolioTarotImac from "@/public/Assets/Images/Webp/portfolio/portfolio-tarot-Imac.webp";
import portfolioTarotMacBook from "@/public/Assets/Images/Webp/portfolio/portfolio-tarot-macbook.webp";
import portfolioTarotIphone from "@/public/Assets/Images/Webp/portfolio/portfolio-tarot-Iphone.webp";
import portfolioFishEyeIMac from "@/public/Assets/Images/Webp/portfolio/portfolio-fishEye-IMac.webp";
import portfolioFishEyeMacBook from "@/public/Assets/Images/Webp/portfolio/portfolio-fishEye-macbook.webp";
import portfolioFishEyeIphone from "@/public/Assets/Images/Webp/portfolio/portfolio-fishEye-IPhone.webp";
import portfolioGameOnIMac from "@/public/Assets/Images/Webp/portfolio/portfolio-gameOn-IMac.webp";
import portfolioGameOnMacBook from "@/public/Assets/Images/Webp/portfolio/portfolio-gameOn-macbook.webp";
import portfolioGameOnIphone from "@/public/Assets/Images/Webp/portfolio/portfolio-gameOn-IPhone.webp";
import portfolioKazaIMac from "@/public/Assets/Images/Webp/portfolio/portfolio-kaza-IMac.webp";
import portfolioKazaMacBook from "@/public/Assets/Images/Webp/portfolio/portfolio-kaza-macbook.webp";
import portfolioKazaIphone from "@/public/Assets/Images/Webp/portfolio/portfolio-kaza-IPhone.webp";
import nextLogo from "@/public/Assets/Icons/portfolio/portfolioNext.webp";
import bootstrapLogo from "@/public/Assets/Icons/portfolio/portfolioBootstrap.webp";
import htmlLogo from "@/public/Assets/Icons/portfolio/portfolio-HTML5.webp";
import cssLogo from "@/public/Assets/Icons/portfolio/portfolio-CSS3.webp";
import jsLogo from "@/public/Assets/Icons/portfolio/portfolio-javascript-icon.webp";
import reactLogo from "@/public/Assets/Icons/portfolio/portfolio-react.webp";
import wordpressLogo from "@/public/Assets/Icons/portfolio/portfolio-wordpress-icon.webp";

export const metadata = {
	title: "Mon Portfolio avec certaines de mes réalisations de sites web",
	description: "Vous retrouverez ici certaines de mes œuvres web, en format responsive. Ce sont des projets internet qui ont répondu à toutes les attentes du client",
	alternates: {
		canonical: "https://www.white-wolf-web.com/portfolio"
	},
	openGraph: {
		title: "Mon Portfolio avec certaines de mes réalisations de sites web",
		description:
			"Vous retrouverez ici certaines de mes œuvres web, en format responsive. Ce sont des projets internet qui ont répondu à toutes les attentes du client",
		url: "https://www.white-wolf-web.com/portfolio",
		siteName: "Agence White Wolf Web",
		images: [
			{
				url: "https://www.white-wolf-web.com/Assets/Images/Jpg/facebook/moi-facebook.jpg",
				width: 800,
				height: 600,
				alt: "moi un jour quand je serais à la retraite",
			},
		],
		locale: "fr-fr",
		type: "website",
	},
};

export default function portfolio() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1>Mon portfolio</h1>
				
					<section className={styles.portfolioSection}>
						<h2>SKIF Belgique</h2>
						<p>Site fédéral de karaté Multilingues avec calendrier, téléchargement de documents, Api Rest ...</p>
						<Link href="https://skif-belgium.vercel.app/"><div className={styles.portfolioImagesMac}>
							<div className={styles.divPortfolioIMac}>
							<Image
									src={portfolioSkifbImac}
									alt="Site SKIF Belgique sur un écran d'IMac"
									placeholder="blur"
									quality={100}
									sizes="100vw"
									className={styles.portfolioIMac}
								/>
							</div>

							<div className={styles.divPortfolioMacBook}>
								<Image
									src={portfolioSkifbMacBook}
									alt="Site SKIF Belgique (karaté) sur un écran Mac Book Pro"
									placeholder="blur"
									quality={100}
									sizes="100vw"
									className={styles.portfolioMacBook}
								/>
							</div>

							<div className={styles.divPortfolioIPhone}>
								<Image
									src={portfolioSkifbIphone}
									alt="Site SKIF Belgique (karaté) depuis un IPhone"
									placeholder="blur"
									quality={100}
									sizes="100vw"
									className={styles.portfolioIPhone}
								/>
							</div>
						</div></Link>
						<div className={styles.divFrameworks}>
							<p className={styles.portfolioP}>Réalisé avec : </p>
							<Image src={nextLogo} alt="Logo de Next.js" quality={100} className={styles.portfolioFramework} />
							<Image src={bootstrapLogo} alt="Logo de Bootstrap" quality={100} className={styles.portfolioFramework} />
							<p> en cours de réalisation ...</p>
						</div>
					</section>
				

				<section className={styles.portfolioSection}>
					<h2>Fish Eye</h2>
					<p>Plateforme pour photographes avec de nombreux multimedias, des algorithmes de tri, carrousel ... </p>
					<div className={styles.portfolioImagesMac}>
						<div className={styles.divPortfolioIMac}>
							<Image
								src={portfolioFishEyeIMac}
								alt="Vue sur un site de photographes sur un écran d'IMac"
								placeholder="blur"
								quality={100}
								sizes="100vw"
								className={styles.portfolioIMac}
							/>
						</div>

						<div className={styles.divPortfolioMacBook}>
							<Image
								src={portfolioFishEyeMacBook}
								alt="Vue sur un site de photographes via un écran Mac Book Pro"
								placeholder="blur"
								quality={100}
								sizes="100vw"
								className={styles.portfolioMacBook}
							/>
						</div>

						<div className={styles.divPortfolioIPhone}>
							<Image
								src={portfolioFishEyeIphone}
								alt="Vue sur un site de photographes version responsive"
								placeholder="blur"
								quality={100}
								sizes="100vw"
								className={styles.portfolioIPhone}
							/>
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
					<h2>Kanap</h2>
					<p>Site E-commerce entierement en JavaScript pur, les prix sont affichés en temps réel</p>
					<div className={styles.portfolioImagesMac}>
						<div className={styles.divPortfolioIMac}>
							<Image
								src={portfolioKanapImac}
								alt="Vue du Site Kanap sur un écran d'IMac"
								placeholder="blur"
								quality={100}
								sizes="100vw"
								className={styles.portfolioIMac}
							/>
						</div>

						<div className={styles.divPortfolioMacBook}>
							<Image
								src={portfolioKanapMacBook}
								alt="Vue sur le site Kanap via un écran Mac Book Pro"
								placeholder="blur"
								quality={100}
								sizes="100vw"
								className={styles.portfolioMacBook}
							/>
						</div>

						<div className={styles.divPortfolioIPhone}>
							<Image
								src={portfolioKanapIphone}
								alt="On peut voir le site Kanap version responsive"
								placeholder="blur"
								quality={100}
								sizes="100vw"
								className={styles.portfolioIPhone}
							/>
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
						<h2>Ho My Food</h2>
						<p>Site web réunissant 4 restaurants, avec des animations Css</p>
						<Link href="https://food-bice-seven.vercel.app/">
						<div className={styles.portfolioImagesMac}>
							<div className={styles.divPortfolioIMac}>
								<Image
									src={portfolioRestoImac}
									alt="les plats à la carte du restaurant"
									placeholder="blur"
									quality={100}
									sizes="100vw"
									className={styles.portfolioIMac}
								/>
							</div>

							<div className={styles.divPortfolioMacBook}>
								<Image
									src={portfolioRestoMacBook}
									alt="les differenets restaurant que l'on peut choisir"
									placeholder="blur"
									quality={100}
									sizes="100vw"
									className={styles.portfolioMacBook}
								/>
							</div>

							<div className={styles.divPortfolioIPhone}>
								<Image
									src={portfolioRestoIphone}
									alt="differentes vues sur des plats proposés"
									placeholder="blur"
									quality={100}
									sizes="100vw"
									className={styles.portfolioIPhone}
								/>
							</div>
						</div></Link>
						<div className={styles.divFrameworks}>
							<p className={styles.portfolioP}>Réalisé avec : </p>
							<Image src={htmlLogo} alt="le logo de Html 5" quality={100} className={styles.portfolioFramework} />
							<Image src={cssLogo} alt="Le logo de CSS 3" quality={100} className={styles.portfolioFramework} />
						</div>
					</section>
				
				
					<section className={styles.portfolioSection}>
						<h2>Game On</h2>
						<p>Landing page, pour un évènement pour Gamers avec son modal d’inscription.</p>
						<Link href="https://game-on-ten.vercel.app/">
						<div className={styles.portfolioImagesMac}>
							<div className={styles.divPortfolioIMac}>
								<Image
									src={portfolioGameOnIMac}
									alt="Vue sur un site de photographes sur un écran d'IMac"
									placeholder="blur"
									quality={100}
									sizes="100vw"
									className={styles.portfolioIMac}
								/>
							</div>

							<div className={styles.divPortfolioMacBook}>
								<Image
									src={portfolioGameOnMacBook}
									alt="Vue sur un site de photographes via un écran Mac Book Pro"
									placeholder="blur"
									quality={100}
									sizes="100vw"
									className={styles.portfolioMacBook}
								/>
							</div>

							<div className={styles.divPortfolioIPhone}>
								<Image
									src={portfolioGameOnIphone}
									alt="Vue sur un site de photographes version responsive"
									placeholder="blur"
									quality={100}
									sizes="100vw"
									className={styles.portfolioIPhone}
								/>
							</div>
						</div></Link>
						<div className={styles.divFrameworks}>
							<p className={styles.portfolioP}>Réalisé avec : </p>
							<Image src={htmlLogo} alt="logo de Html" quality={100} className={styles.portfolioFramework} />
							<Image src={cssLogo} alt="Logo de CSS" quality={100} className={styles.portfolioFramework} />
							<Image src={jsLogo} alt="Le logo de Javascript" quality={100} className={styles.portfolioFramework} />
						</div>
					</section>
				

				<section className={styles.portfolioSection}>
					<h2>Astrologie pour Tous</h2>
					<p>Site web info (école) à propos de l’astrologie moderne en Wordpress.</p>
					<div className={styles.portfolioImagesMac}>
						<div className={styles.divPortfolioIMac}>
							<Image
								src={portfolioAstroImac}
								alt="Page d'acceuil d'un site d'astrologie"
								placeholder="blur"
								quality={100}
								sizes="100vw"
								className={styles.portfolioIMac}
							/>
						</div>

						<div className={styles.divPortfolioMacBook}>
							<Image
								src={portfolioAstroMacBook}
								alt="article relayant la planets Jupiter"
								placeholder="blur"
								quality={100}
								sizes="100vw"
								className={styles.portfolioMacBook}
							/>
						</div>

						<div className={styles.divPortfolioIPhone}>
							<Image
								src={portfolioAstroIphone}
								alt="le signe zodiacal du Scorpion"
								placeholder="blur"
								quality={100}
								sizes="100vw"
								className={styles.portfolioIPhone}
							/>
						</div>
					</div>
					<div className={styles.divFrameworks}>
						<p className={styles.portfolioP}>Réalisé avec : </p>
						<Image src={wordpressLogo} alt="le logo de Wordpress" quality={100} className={styles.portfolioFramework} />
					</div>
				</section>

			
					{" "}
					<section className={styles.portfolioSection}>
						<h2>Les petits plats</h2>
						<p>Site web de recettes culinaires, avec algorithmes de recherche & de tri</p>
						<Link href="https://petits-plats-chi.vercel.app/">
						<div className={styles.portfolioImagesMac}>
							<div className={styles.divPortfolioIMac}>
								<Image
									src={portfolioPlatsImac}
									alt="vue sur un ensemble de recettes"
									placeholder="blur"
									quality={100}
									sizes="100vw"
									className={styles.portfolioIMac}
								/>
							</div>

							<div className={styles.divPortfolioMacBook}>
								<Image
									src={portfolioPlatsMacBook}
									alt="salade méditéranéene"
									placeholder="blur"
									quality={100}
									sizes="100vw"
									className={styles.portfolioMacBook}
								/>
							</div>

							<div className={styles.divPortfolioIPhone}>
								<Image
									src={portfolioPlatsIphone}
									alt="la recette du poulet coco"
									placeholder="blur"
									quality={100}
									sizes="100vw"
									className={styles.portfolioIPhone}
								/>
							</div>
						</div></Link>
						<div className={styles.divFrameworks}>
							<p className={styles.portfolioP}>Réalisé avec : </p>
							<Image src={reactLogo} alt="le logo de React" quality={100} className={styles.portfolioFramework} />
						</div>
					</section>
				
				
					<section className={styles.portfolioSection}>
						<h2>Kaza</h2>
						<p>Site immobilier en React, avec Dropdown, carousel, tags ...</p>
						<Link href="https://kaza2.vercel.app/">
						<div className={styles.portfolioImagesMac}>
							<div className={styles.divPortfolioIMac}>
								<Image
									src={portfolioKazaIMac}
									alt="site immobilier"
									placeholder="blur"
									quality={100}
									sizes="100vw"
									className={styles.portfolioIMac}
								/>
							</div>

							<div className={styles.divPortfolioMacBook}>
								<Image
									src={portfolioKazaMacBook}
									alt="propriétaire immobilier"
									placeholder="blur"
									quality={100}
									sizes="100vw"
									className={styles.portfolioMacBook}
								/>
							</div>

							<div className={styles.divPortfolioIPhone}>
								<Image
									src={portfolioKazaIphone}
									alt="equipement du bien immobilier"
									placeholder="blur"
									quality={100}
									sizes="100vw"
									className={styles.portfolioIPhone}
								/>
							</div>
						</div></Link>
						<div className={styles.divFrameworks}>
							<p className={styles.portfolioP}>Réalisé avec : </p>
							<Image src={reactLogo} alt="le logo de React" quality={100} className={styles.portfolioFramework} />
						</div>
					</section>
				

				<section className={styles.portfolioSection}>
					<h2>Cours de Tarot</h2>
					<p>Site info en Wordpress à propos des tarots de Marseille</p>
					<div className={styles.portfolioImagesMac}>
						<div className={styles.divPortfolioIMac}>
							<Image
								src={portfolioTarotImac}
								alt="Page d'acceuil d'un site de tarologie"
								placeholder="blur"
								quality={100}
								sizes="100vw"
								className={styles.portfolioIMac}
							/>
						</div>

						<div className={styles.divPortfolioMacBook}>
							<Image
								src={portfolioTarotMacBook}
								alt="1er lame du tarot"
								placeholder="blur"
								quality={100}
								sizes="100vw"
								className={styles.portfolioMacBook}
							/>
						</div>

						<div className={styles.divPortfolioIPhone}>
							<Image
								src={portfolioTarotIphone}
								alt="le bateleur"
								placeholder="blur"
								quality={100}
								sizes="100vw"
								className={styles.portfolioIPhone}
							/>
						</div>
					</div>
					<div className={styles.divFrameworks}>
						<p className={styles.portfolioP}>Réalisé avec : </p>
						<Image src={wordpressLogo} alt="le logo de Wordpress" quality={100} className={styles.portfolioFramework} />
						<p> en cours de réalisation ...</p>
					</div>
				</section>
			</main>
		</div>
	);
}

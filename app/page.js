import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { StormContainerCard, cards } from "@/components/Cards/StormContainerCard";
import GreenLine from "@/utils/greenLine";
import { LangageCards } from "@/components/Cards/cardLangage";
import SeeOtherButton from "@/utils/seeOtherButton";
import { ContainerBigCardHomePage } from "@/components/Cards/ContainerBigCardHomePage";
import ContainerBlog from "@/components/Blog/ContainerBlog";
import MetadataHomePage from "@/components/Metadata/MetadataHomePage";

export const metadata = {

	canonical: "https://www.white-wolf-web.com/",
};
export default function Home() {
	return (
		<>
			<div className={styles.bienvenueContent}>
				<h1>
					Agence White Wolf Web
					<br />
					Experte en création de site web & SEO
				</h1>
				<p>
					Bienvenue chez White Wolf Web, l&apos;agence web innovante qui vous accompagne dans{" "}
					<Link href="/articles/creation-site-web" className={styles.internalLink}>
						la création de votre site web
					</Link>{" "}
					accessible, de{" "}
					<Link href="/articles/creation-site-web/#site-Ecommerce" className={styles.internalLink}>
						votre boutique en ligne
					</Link>{" "}
					personnalisé, d&apos;un blog personnel, un{" "}
					<Link href="/articles/web-design" className={styles.internalLink}>
						design responsive
					</Link>{" "}
					, un{" "}
					<Link href="/articles/referencement-seo-google" className={styles.internalLink}>
						référencement naturel
					</Link>{" "}
					(optimisation pour les moteurs de recherche tel que Google) ainsi que le marketing digital pour propulser votre succès en ligne ! 🚀💻{" "}
				</p>
				<p>
					Chaque projet internet est unique et mérite une attention particulière. Nous sommes là pour vous guider et vous aider à développer votre entreprise en
					ligne, en offrant des solutions personnalisées adaptées à vos besoins et à votre budget.
				</p>
				<p>
					La refonte d&apos;un site web professionnel n&apos;est pas seulement une question de changement de web-design, elle contribue également
					d&apos;optimiser l&apos;utilisation des mots-clés & des techniques SEO pour améliorer le référencement naturel, en particulier si vous prévoyez de
					créer une boutique en ligne.
				</p>
				<p>
					Nous vous aidons également pour l&apos;hébergement de vos pages web, la configuration d&apos;un nom de domaine personnalisé, une utilisation
					intelligente des mots-clés, une visibilité maximale de votre marque sur{" "}
					<Link href="/articles/reseaux-sociaux" className={styles.internalLink}>
						les réseaux sociaux
					</Link>{" "}
					(
					<Link href="/articles/reseaux-sociaux/#facebook" className={styles.colorFacebook}>
						Facebook
					</Link>
					,{" "}
					<Link href="/articles/reseaux-sociaux/#instagram" className={styles.colorInstagram}>
						Instagram
					</Link>
					,{" "}
					<Link href="/articles/reseaux-sociaux/#youtube" className={styles.colorYoutube}>
						Youtube
					</Link>
					,
					<Link href="/articles/reseaux-sociaux/#twitter" className={styles.colorTwitter}>
						Twitter
					</Link>
					...) et les moteurs de recherche. Tous ces éléments vont renforcer la présence de votre marque en ligne.
				</p>
			</div>
			<section className={styles.storm}>
				<h2>Services Web</h2>
				<StormContainerCard cards={cards} />
			</section>
			<section className={styles.sectionHomePage}>
				<h2 className={styles.homeH2MarginTop}>La création de votre site internet professionnel</h2>
				<p>
					<strong>Notre agence web</strong> est situé en <strong>Belgique</strong>, au sud de <strong>Bruxelles</strong>. Notre but est de vous guider dans la
					jungle du web-design et l&apos;univers du web développeur, pour transformer votre vision d’un site internet professionnel, qui vous sera livré clé en
					main et parfaitement adapté à vos besoins. Du développement web à la gestion de contenu, en passant au choix de l&apos;hebergeur ou du nom de domaine
					approprié nous sommes le webmaster & developpeur d&apos;application Web qui vous accompagne à chaque étape de votre projet. <br></br>
					<br></br>Nous vous proposons :
				</p>

				<ul>
					<li className={styles.newLi}>
						<Link href="/articles/creation-site-web#site-vitrine" className={styles.linkHomePage}>
							Site Vitrine
						</Link>
					</li>
					<li className={styles.newLi}>
						<Link href="/articles/creation-site-web#site-Ecommerce" className={styles.linkHomePage}>
							Site E-commerce
						</Link>
					</li>
					<li className={styles.newLi}>Blog</li>
					<li className={styles.newLi}>
						<Link href="/articles/creation-site-web#siteInformations" className={styles.linkHomePage}>
							Site institutionnel (info)
						</Link>
					</li>
					<li className={styles.newLi}>
						<Link href="/articles/creation-site-web#siteMobile" className={styles.linkHomePage}>
							Site mobile first
						</Link>
					</li>
					<li className={styles.newLi}>Site sur mesure</li>
					<li className={styles.newLi}>
						<Link href="/articles/creation-site-web#portfolio" className={styles.linkHomePage}>
							Portfolio
						</Link>
					</li>
					<li className={styles.newLi}>
						<Link href="/articles/creation-site-web#landingPage" className={styles.linkHomePage}>
							Site d&apos;événements (Landing page)
						</Link>
					</li>
					<li className={styles.newLi}>Application web</li>
					<li className={styles.newLi}>
						<Link href="/articles/creation-site-web#wordpress" className={styles.linkHomePage}>
							Site Wordpress
						</Link>
					</li>
					<li className={styles.newLi}>
						<Link href="/articles/creation-site-web#joomla" className={styles.linkHomePage}>
							Site Joomla
						</Link>
					</li>
					<li>&emsp;&ensp;...</li>
				</ul>
			</section>
			<GreenLine />

			<div id="langages" className={styles.langageContainer}>
				<LangageCards />
			</div>
			<section className={styles.sectionHomePage}>
				<h2 className={styles.homeH2MarginTop}>Les coûts de création d&apos;un site web</h2>
				<p>
					À l&apos;ère du numérique, disposer d&apos;un site web est essentiel pour toute entreprise ou tout particulier désireux d&apos;établir une forte
					présence en ligne. Toutefois, les coûts associés à la création d&apos;un site web peuvent souvent sembler insurmontables et déroutants, ce qui fait
					que de nombreuses personnes ne savent pas par où commencer. C&apos;est pourquoi nous avons créé ce guide complet pour démystifier les coûts de
					création d&apos;un site web. De l&apos;enregistrement du domaine et des frais d&apos;hébergement aux coûts de conception et de développement, nous
					décomposons les dépenses liées à la création d&apos;un site web et vous donnons des indications précieuses sur la manière de maîtriser les coûts. Que
					vous soyez propriétaire d&apos;une petite entreprise ou un blogueur désireux de créer son propre site web, ce guide vous apportera les connaissances
					et les outils nécessaires pour créer un site web professionnel et efficace sans vous ruiner. Alors, commençons et dévoilons les secrets des coûts de
					création d&apos;un site web !
				</p>
				<SeeOtherButton href="/admin/price" text="En savoir +++" />
			</section>
			<section id="articles">
				<ContainerBigCardHomePage />
			</section>

			<section className={styles.conclusionHomePage}>
				<h2 className={styles.homeH2}>Notre mission est de vous fournir un site web d&apos;excellence</h2>
				<p>
					Nous comprenons que la création de site internet et la gestion d&apos;une boutique en ligne peut être un défi, en particulier si vous êtes un
					auto-entrepreneur ou une petite entreprise. C&apos;est pourquoi nous mettons tout en œuvre pour vous aider à surmonter ces obstacles. <br></br>
					Notre équipe dévouée de développeurs web, de webdesigners, de spécialistes du blog et d&apos;images est là pour vous guider et vous soutenir à chaque
					étape. Nous sommes en mesure de vous fournir des solutions qui non seulement répondent à vos besoins, mais aussi surpassent vos attentes.
				</p>

				<p>
					Si vous êtes à Bruxelles, en Belgique, ou n&apos;importe où dans le monde, nous serions ravis de vous aider à transformer votre vision en réalité. Ne
					laissez pas la complexité du web vous décourager - avec White Wolf Web à vos côtés, vous avez un partenaire de confiance pour naviguer dans la jungle
					du web. Ensemble, nous pouvons réaliser de grandes choses. Nous sommes impatients de travailler avec vous!
				</p>
			</section>
			<ContainerBlog />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataHomePage) }} />
		</>
	);
}

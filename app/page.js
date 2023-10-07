import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
//import { StormContainerCard, cards } from "@/components/Cards/StormContainerCard";
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
					Bienvenue chez White Wolf Web, l&apos;<strong>agence web</strong> innovante qui vous accompagne dans la {" "}
					<Link href="/articles/creation-site-web" className={styles.internalLink}>
						création de site web
					</Link>
					{" "}accessible, de {" "}
					<Link href="/articles/creation-site-web/#site-Ecommerce" className={styles.internalLink}>
						 boutique en ligne
					</Link>{" "}
					personnalisé, d&apos;un blog personnel, un{" "}
					<Link href="/articles/web-design" className={styles.internalLink}>
						design responsive
					</Link>{" "}
					, un{" "}
					<Link href="/articles/referencement-seo-google" className={styles.internalLink}>
						référencement naturel - SEO
					</Link>{" "}
					(optimisation des moteurs de recherche tel que Google) ainsi que le marketing digital afin de propulser votre succès en ligne ! 🚀💻{" "}
				</p>
				<p>
					Chaque projet internet est unique et mérite une attention particulière. Wild Wolf Web est là pour guider & aider à développer votre entreprise sur le web, en offrant des solutions personnalisées adaptées à vos besoins et à votre budget.
				</p>
				<p>
					La refonte d&apos;un <strong>site web professionnel</strong> n&apos;est pas seulement une question de changement de web-design, elle contribue également
					d&apos;optimiser l&apos;utilisation des mots-clés & des <strong>techniques SEO</strong> qui permette d&apos;améliorer le <strong>référencement naturel</strong>, en particulier si vous prévoyez de
					créer une <strong>boutique en ligne</strong>.
				</p>
				<p>
					Notre agence Web apporte également notre aide pour l&apos;hébergement de vos pages web, la configuration d&apos;un nom de domaine personnalisé, une utilisation
					intelligente des mots-clés, une visibilité maximale de votre marque sur les {" "}
					<Link href="/articles/reseaux-sociaux" className={styles.internalLink}>
						réseaux sociaux
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
					...) et les moteurs de recherche. Tous ces éléments vont renforcer la présence de votre marque sur le web.
				</p>
			</div>
			
			<section className={styles.sectionHomePage}>
				<h2 className={styles.homeH2MarginTop}>La création de site internet professionnel</h2>
				<p>
					<strong>Notre agence web</strong> est situé en <strong>Belgique</strong>, au sud de <strong>Bruxelles</strong>. Notre but est de vous guider dans la
					jungle du <strong>web</strong>-design et l&apos;univers du web développeur, afin de transformer votre vision d’un <strong>site internet professionnel</strong>, qui sera livré clé en
					main et parfaitement adapté à vos besoins. Du <strong>développement web</strong> à la gestion de contenu, en passant au choix de l&apos;hebergeur ou du nom de domaine
					approprié nous sommes le <strong>webmaster</strong> & developpeur d&apos;application Web qui est présent à chaque étape du projet. <br></br>
					<br></br>Nos propositions :
				</p>

				<ul>
					<li className={styles.newLi}>
						<Link href="/articles/creation-site-web#site-vitrine" className={styles.linkHomePage}>
						<strong>		Site Vitrine</strong>
						</Link>
					</li>
					<li className={styles.newLi}>
						<Link href="/articles/creation-site-web#site-Ecommerce" className={styles.linkHomePage}>
						<strong>Site E-commerce</strong>
						</Link>
					</li>
					<li className={styles.newLi}>Blog</li>
					<li className={styles.newLi}>
						<Link href="/articles/creation-site-web#siteInformations" className={styles.linkHomePage}>
						<strong>Site institutionnel </strong>(info)
						</Link>
					</li>
					<li className={styles.newLi}>
						<Link href="/articles/creation-site-web#siteMobile" className={styles.linkHomePage}>
						<strong>Site mobile-first</strong>
						</Link>
					</li>
					<li className={styles.newLi}>Site sur mesure</li>
					<li className={styles.newLi}>
						<Link href="/articles/creation-site-web#portfolio" className={styles.linkHomePage}>
						<strong>Portfolio</strong>
						</Link>
					</li>
					<li className={styles.newLi}>
						<Link href="/articles/creation-site-web#landingPage" className={styles.linkHomePage}>
						<strong>Site d&apos;événements (Landing page</strong>)
						</Link>
					</li>
					<li className={styles.newLi}><strong>Application web</strong></li>
					<li className={styles.newLi}>
						<Link href="/articles/creation-site-web#wordpress" className={styles.linkHomePage}>
						<strong>Site Wordpress</strong>
						</Link>
					</li>
					<li className={styles.newLi}>
						<Link href="/articles/creation-site-web#joomla" className={styles.linkHomePage}>
						<strong>Site Joomla</strong>
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
					À l&apos;ère du numérique, disposer d&apos;un <strong>site web</strong> est essentiel pour toute entreprise ou tout particulier désireux d&apos;établir une <Link  href="/articles/referencement-seo-google" className={styles.internalLink}>forte
					présence en ligne</Link>. Toutefois, les coûts associés à la <strong>création d&apos;un site web</strong> peuvent souvent sembler insurmontables et déroutants, ce qui fait
					que de nombreuses personnes ne savent pas par où commencer. C&apos;est pourquoi ce guide complet a été créé, afin de démystifier les coûts de
					<strong>création d&apos;un site web</strong>. De l&apos;enregistrement du domaine et des frais d&apos;hébergement aux coûts de <strong>conception</strong> et de <strong>développement</strong>,
					 les dépenses liées à la création d&apos;un site web et donnons des indications précieuses sur la manière de maîtriser les coûts. Que
					l&apos;on soit propriétaire d&apos;une petite entreprise ou un blogueur désireux de créer son propre <strong>site web</strong>, ce guide apportera les connaissances
					et les outils nécessaires afin de créer un <strong>site web professionnel</strong> et efficace sans se ruiner. Alors, commençons et dévoilons les secrets des coûts de 
					<strong>création d&apos;un site web</strong> !
				</p>
				<SeeOtherButton href="/admin/price" text="En savoir +++" />
			</section>
			<section id="articles">
				<ContainerBigCardHomePage />
			</section>

			<section className={styles.conclusionHomePage}>
				<h2 className={styles.homeH2}>Notre mission est de fournir un site web d&apos;excellence</h2>
				<p>
					La <Link  href="/articles/creation-site-web" className={styles.internalLink}>création de site internet</Link> et la gestion d&apos;une boutique en ligne peut être un défi, en particulier 
					les auto-entrepreneurs ou une petites entreprises. C&apos;est pourquoi notre agence de création web met tout en œuvre afin d&apos;aider à surmonter ces obstacles. <br></br>
					Notre équipe dévouée de <strong>développeurs web</strong>, de <strong>webdesigners</strong>, de <Link  href="/blog" className={styles.internalLink}>spécialistes du blog</Link> et d&apos;images est là pour vous guider et vous soutenir à chaque
					étape. Wild Wolf Web est en mesure de fournir des solutions qui non seulement répondent à vos besoins, mais aussi surpassent vos attentes.
				</p>

				<p>
					Si vous êtes à <strong>Bruxelles</strong>, en <strong>Belgique</strong>, ou n&apos;importe où dans le monde, notre agence web serais ravis de vous aider à transformer une vision en réalité. Ne
					laissez pas la complexité du web vous décourager - avec <strong>White Wolf Web</strong> à vos côtés, c&apos;est avoir un partenaire de confiance qui permet de naviguer dans la jungle
					du web. Ensemble, nous pouvons réaliser de grandes choses. Notre agence web est impatients de travailler avec votre entreprise !
				</p>
			</section>
			{/*
			<section className={styles.storm}>
				<h2>Services Web</h2>
				<StormContainerCard cards={cards} />
			</section> */}
			<ContainerBlog />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataHomePage) }} />
		</>
	);
}

// import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import GreenLine from "@/utils/greenLine";
import { LangageCards } from "@/components/Cards/cardLangage";
import SeeOtherButton from "@/utils/seeOtherButton";
import { ContainerBigCardHomePage } from "@/components/Cards/ContainerBigCardHomePage";
import ContainerBlog from "@/components/Blog/ContainerBlog";
import MetadataHomePage from "@/components/Metadata/MetadataHomePage";
// import { Metadata } from "next";

export const metadata = {
	title: "Création de Site internet Pro & référencement naturel - SEO",
	description:
		"Agence Web innovante: création de site internet - web, design, référencement naturel SEO et marketing digital afin de propulser votre succès en ligne!",
	alternates: {
		canonical: "https://www.white-wolf-web.com/",
	},
};
export default function Home() {
	return (
		<>
			<div className={styles.bienvenueContent}>
				<h1>Expert en création de site internet & SEO - Référencement naturel</h1>
				<p>
					Bienvenue chez White Wolf Web, l&apos;<span className={styles.colorLightGrey}></span><strong>agence web</strong> innovante qui vous accompagne dans la{" "}
					<Link href="/articles/creation-site-web" className={styles.internalLink}>
						création de site web
					</Link>{" "}
					accessible, de{" "}
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
					(optimisation des moteurs de recherche tel que Google) ainsi que le <Link href="/articles/reseaux-sociaux" className={styles.internalLink}>
					marketing digital
					</Link> afin de propulser votre succès en ligne ! 🚀💻{" "}
				</p>
				<p>
					Chaque projet internet est unique et mérite une attention particulière. Wild Wolf Web est là pour guider & aider à développer votre entreprise sur le
					web, en offrant des solutions personnalisées adaptées à vos besoins et à votre budget.
				</p>
				<p>
					La refonte d&apos;un <span className={styles.colorLightGrey}><strong>site web professionnel</strong></span> n&apos;est pas seulement une question de changement de <Link href="/articles/web-design" className={styles.internalLink}>
					web-design
					</Link>, elle contribue
					également d&apos;optimiser l&apos;utilisation des mots-clés & des <span className={styles.colorLightGrey}><strong>techniques SEO</strong></span> qui permette d&apos;améliorer le{" "}
					<span className={styles.colorLightGrey}><strong>référencement naturel</strong></span>, en particulier si vous prévoyez de créer une <span className={styles.colorLightGrey}><strong>boutique en ligne</strong></span>.
				</p>
				<p>
					Notre agence Web apporte également de l&apos; aide pour l&apos;hébergement de vos pages web, la configuration d&apos;un nom de domaine personnalisé,
					une utilisation intelligente des mots-clés, une visibilité maximale de la marque sur les{" "}
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
					...) et les moteurs de recherche. Tous ces éléments vont renforcer la présence de la marque sur le web.
				</p>
			</div>

			<section className={styles.sectionHomePage}>
				<h2 className={styles.homeH2MarginTop}>Conception Professionnelle de Sites Web : Qualité et Performance</h2>
				<p>
				<span className={styles.colorLightGrey}><strong>Notre agence web</strong></span> est situé en <span className={styles.colorLightGrey}><strong>Belgique</strong></span>, au sud de <span className={styles.colorLightGrey}><strong>Bruxelles</strong></span>. Le but est de vous guider dans la
					jungle du <span className={styles.colorLightGrey}><strong>web</strong></span>-design et l&apos;univers du web développeur, afin de transformer votre vision d’un{" "}
					<span className={styles.colorLightGrey}><strong>site internet professionnel</strong></span>, qui sera livré clé en main, sa stucture & sa sémantique seront parfaitement adapté pour le référencement
					naturel - SEO et répondra à tous vos besoins. </p> <p>Du <span className={styles.colorLightGrey}><strong>développement web</strong></span> à la gestion de contenu, en passant au choix de l&apos;hebergeur
					ou du nom de domaine approprié nous sommes le <span className={styles.colorLightGrey}><strong>webmaster</strong></span> & developpeur d&apos;application Web qui est présent à chaque étape du
					projet. <br></br>
					<br></br>Nos propositions :
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
							Site institutionnel(info)
						</Link>
					</li>
					<li className={styles.newLi}>
						<Link href="/articles/creation-site-web#siteMobile" className={styles.linkHomePage}>
							Site mobile-first
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
					<li className={styles.newLi}>
						Application web
					</li>
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
					<li className={styles.newLi}>
						<Link href="/articles/referencement-seo-google" className={styles.linkHomePage}>
							SEO - Référencement naturel
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
				<h2 className={styles.homeH2MarginTop}>Comprendre les Coûts : Investir dans un Site Web de Qualité</h2>
				<p>
					À l&apos;ère du numérique, disposer d&apos;un <span className={styles.colorLightGrey}><strong>site web</strong></span> est essentiel pour toute entreprise ou tout particulier désireux
					d&apos;établir une{" "}
					<Link href="/articles/referencement-seo-google" className={styles.internalLink}>
						forte présence en ligne
					</Link>
					. Toutefois, les coûts associés à la <span className={styles.colorLightGrey}><strong>création d&apos;un site internet</strong></span> peuvent souvent sembler insurmontables et déroutants, ce qui
					fait que de nombreuses personnes ne savent pas par où commencer.</p> <p> C&apos;est pourquoi ce guide complet a été créé, afin de démystifier les coûts de
					<span className={styles.colorLightGrey}><strong>création d&apos;un site web</strong></span>. De l&apos;enregistrement du domaine et des frais d&apos;hébergement aux coûts de{" "}
					<span className={styles.colorLightGrey}><strong>conception</strong></span> et de <span className={styles.colorLightGrey}><strong></strong><strong>développement</strong></span>, les dépenses liées à la création d&apos;un site internet et donnons des indications
					précieuses sur la manière de maîtriser les coûts. </p> <p>Que l&apos;on soit propriétaire d&apos;une petite entreprise ou un blogueur désireux de créer son
					propre <span className={styles.colorLightGrey}><strong>site web</strong></span>, ce guide apportera les connaissances et les outils nécessaires afin de créer un{" "}
					<span className={styles.colorLightGrey}><strong>site web professionnel</strong></span> et efficace sans se ruiner. <br />Alors, commençons et dévoilons les secrets des coûts de{" "}
					<span className={styles.colorLightGrey}><strong>création d&apos;un site web</strong></span> !
				</p>
				<SeeOtherButton href="/admin/price" text="En savoir ++" />
			</section>
			<section id="articles">
				<ContainerBigCardHomePage />
			</section>

			<section className={styles.conclusionHomePage}>
				<h2 className={styles.homeH2}>Notre Engagement : Excellence et Innovation dans la Création Web</h2>
				<p>
					La{" "}
					<Link href="/articles/creation-site-web" className={styles.internalLink}>
						création de site internet
					</Link>{" "}
					et la gestion d&apos;une boutique en ligne peut être un défi, en particulier les auto-entrepreneurs ou une petites entreprises. C&apos;est pourquoi
					l&apos;agence de création web met tout en œuvre afin d&apos;aider à surmonter ces obstacles. </p> <p>
					L&apos;équipe de white wolf web est composée de dévouée <span className={styles.colorLightGrey}><strong>développeurs web</strong></span>, de <span className={styles.colorLightGrey}><strong>webdesigners</strong></span>, de{" "}
					<Link href="/blog" className={styles.internalLink}>
						spécialistes du blog
					</Link>
					, consultant SEO et chacun est là en vue de vous guider et soutenir à chaque étape. Wild Wolf Web est en mesure de fournir des solutions qui non
					seulement répondent à vos besoins, mais aussi surpassent vos attentes.
				</p>

				<p>
					Si vous êtes à <span className={styles.colorLightGrey}><strong>Bruxelles</strong></span>, en <span className={styles.colorLightGrey}><strong>Belgique</strong></span>, ou n&apos;importe où dans le monde, l&apos;agence web serait ravis de vous
					aider à transformer une vision en réalité. Ne laissez pas la complexité du web vous décourager - avec <span className={styles.colorLightGrey}><strong>White Wolf Web</strong></span> à vos côtés,
					c&apos;est avoir un partenaire de confiance qui permet de naviguer dans la jungle du web. Ensemble, nous pouvons réaliser de grandes choses. Notre
					agence web est impatients de travailler avec votre entreprise !
				</p>
			</section>
			<ContainerBlog />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataHomePage) }} />
		</>
	);
}

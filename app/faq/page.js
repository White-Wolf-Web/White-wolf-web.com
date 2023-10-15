"use client";
import Head from "next/head";
import styles from "@/app/page.module.css";
import { useState } from "react";

export const metadata = {
	title: "FAQ - Question et reponse facile à comprendre",
	description:
		"Série de questions - réponses facile à comprendre pour vous aider",
	canonical: "https://www.white-wolf-web.com/faq",
};

export default function Faq() {
	const [visibleSections, setVisibleSections] = useState({});

	const toggleParagraph = (id) => {
		setVisibleSections({
			...visibleSections,
			[id]: !visibleSections[id],
		});
	};

	return (
		<div className={styles.container}>

			<main className={styles.main}>
				<section>
					<h1>FAQ - Foire Aux Questions</h1>
					<div onClick={() => toggleParagraph("section1")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Qu&apos;est-ce qu&apos;une agence Web ?</h2>
						{visibleSections.section1 && (
							<p>
								Une agence Web est une entreprise spécialisée dans la création et la gestion de projets digitaux. Cela peut inclure la conception de sites
								web, le marketing digital, le développement d&apos;applications et bien plus encore.
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section2")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Comment commencer un projet avec notre agence ?</h2>
						{visibleSections.section2 && (
							<p>
								Vous pouvez commencer en nous contactant via notre formulaire de contact, E-mail, téléphone... Un de nos spécialistes discutera avec vous
								pour comprendre vos besoins et proposer la meilleure solution possible.
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section3")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Quels sont les coûts associés à la création d&apos;un site web ?</h2>
						{visibleSections.section3 && (
							<p>
								Le coût d&apos;un site web peut varier en fonction de nombreux facteurs, tels que la complexité du design, le nombre de pages, les
								fonctionnalités spécifiques requises, etc. Nous fournirons un devis précis après avoir discuté de vos besoins spécifiques.
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section4")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Quel est le délai de création d&apos;un site web ?</h2>
						{visibleSections.section4 && (
							<p>
								Le délai de création d&apos;un site web dépend de la complexité du projet. Un site web simple peut être prêt en entre 1 jour à 1 semaine,
								tandis qu&apos;un site web plus complexe peut prendre plusieurs mois. Nous donnerons une estimation précise du délai lors de notre
								première discussion.
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section5")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Pourquoi devrais-je engager une agence Web plutôt que de créer le site moi-même ?</h2>
						{visibleSections.section5 && (
							<p>
								Les agences Web ont l&apos;expérience et l&apos;expertise pour concevoir des sites Web de qualité professionnelle qui répondent aux
								besoins spécifiques de l&apos;entreprise. Elles s&apos;assurent que votre site est non seulement attrayant, mais aussi fonctionnel et
								optimisé pour les moteurs de recherche. Mais encore une fois tout dépend de ce vous attendez du site web.
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section6")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Proposez-vous des services de maintenance après la création du site Web ?</h2>
						{visibleSections.section6 && (
							<p>
								Oui, nous offrons divers plans de maintenance qui assurent que le site reste à jour et sécurisé. Cela peut inclure des mises à jour
								régulières, la résolution de problèmes de sécurité, l&apos;ajout de nouvelles fonctionnalités et bien plus encore.
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section7")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Quelle est l&apos;importance du référencement (SEO) pour mon site Web ?</h2>
						{visibleSections.section7 && (
							<p>
								Le SEO est essentiel pour assurer la visibilité du site Web sur les moteurs de recherche. Un bon SEO signifie plus de trafic, ce qui
								peut conduire à une augmentation des ventes et des prospects pour votre entreprise.
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section8")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Puis-je voir des exemples de votre travail précédent ?</h2>
						{visibleSections.section8 && (
							<p>
								Bien sûr ! Nous serions heureux de vous montrer notre portefeuille de projets passés pour que vous puissiez voir la qualité de notre
								travail et obtenir une idée de ce que nous pourrions faire pour votre entreprise.
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section9")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Quelles informations dois-je fournir pour commencer un projet ?</h2>
						{visibleSections.section9 && (
							<p>
								Nous aurons besoin d&apos;une compréhension claire de vos objectifs, du public cible, de vos préférences en matière de design et de
								toute autre information spécifique à votre entreprise ou industrie. Plus nous avons d&apos;informations, mieux nous pouvons
								répondre à vos besoins.
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section10")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Quels types de sites Web créez-vous ?</h2>
						{visibleSections.section10 && (
							<p>
								Nous créons une variété de sites Web, y compris des sites de E-commerce, des blogs, des des sites d&apos;information, des landing Page,
								sites vitrines etc...
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section11")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Pouvez-vous aider avec le contenu du site Web ?</h2>
						{visibleSections.section11 && (
							<p>Oui, nous avons une rédactrice professionnelle qui peut aider à créer du contenu attrayant et optimisé pour le SEO.</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section12")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Pouvez-vous aider à améliorer la vitesse de mon site Web ?</h2>
						{visibleSections.section12 && (
							<p>
								Oui, nous analysons les performances de votre site Web et apporter des modifications pour améliorer la vitesse de chargement des pages.
								C’est par ailleurs un point important pour nous !{" "}
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section13")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Offrez-vous des services de marketing numérique ?</h2>
						{visibleSections.section13 && (
							<p>Oui, nous offrons une gamme de services de marketing numérique y compris le SEO, le PPC, le marketing par e-mail, etc.</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section14")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Mon site sera-t-il mobile-friendly ?</h2>
						{visibleSections.section14 && (
							<p>
								Absolument, tous les sites Web que nous concevons sont optimisés pour tous les appareils, y compris les mobiles et les tablettes.
								C&apos;est l&apos;un des points crucial du site.
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section15")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Offrez-vous des services de re-design de site Web ?</h2>
						{visibleSections.section15 && (
							<p>Oui, nous pouvons aider à moderniser votre site Web existant pour le rendre plus attrayant et performant.</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section16")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Utilisez-vous des modèles de site Web ou est-ce que tout est personnalisé ?</h2>
						{visibleSections.section16 && (
							<p>
								Nous pouvons travailler de deux façons, selon les besoins du client. Nous pouvons personnaliser un modèle existant ou créer un design
								entièrement personnalisé. Mais nous préférons partir d’une feuille blanche.
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section17")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Offrez-vous un support technique après la mise en ligne du site web ?</h2>
						{visibleSections.section17 && (
							<p>Oui, nous offrons un support après-vente pour aider nos clients avec tout problème technique qu&apos;ils pourraient rencontrer.</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section18")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Fournissez-vous des services d&apos;hébergement web ?</h2>
						{visibleSections.section18 && <p>Oui, nous offrons des solutions d&apos;hébergement web sécurisées et fiables.</p>}
					</div>

					<div onClick={() => toggleParagraph("section19")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Comment puis-je suivre les progrès de mon projet ?</h2>
						{visibleSections.section19 && (
							<p>
								Nous fournissons des mises à jour régulières sur l&apos;avancement du projet et sommes toujours disponibles pour discuter de toute
								question que vous pourriez avoir. Lorsque nous avons un projet assez conséquent, nous organisons régulièrement des réunions, afin que vous
								puissiez voir l’avancement du travail, mais aussi si vous désirez un changement important avant qu’il ne soit trop tard.
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section20")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Est-ce que mon site web sera optimisé pour les moteurs de recherche (SEO) ?</h2>
						{visibleSections.section20 && (
							<p>
								Oui, tous les sites web que nous créons sont conçus avec le SEO à l&apos;esprit pour aider à augmenter sa visibilité en ligne. C’est
								pour nous un point important !
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section21")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Quels types de systèmes de gestion de contenu (CMS) utilisez-vous ?</h2>
						{visibleSections.section21 && <p>Nous travaillons avec 2 CMS : WordPress, Joomla. Le plus utilisé étant Wordpress.</p>}
					</div>

					<div onClick={() => toggleParagraph("section22")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Avez-vous de l&apos;expérience avec le E-commerce ?</h2>
						{visibleSections.section22 && (
							<p>
								Oui, nous avons une grande expérience dans la conception de sites de E-commerce et pouvons aider à configurer une boutique en ligne
								sécurisée.
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section23")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Puis-je vous fournir mes propres images et contenu pour le site web ?</h2>
						{visibleSections.section23 && (
							<p>
								Absolument, nous encourageons les clients à fournir leur propre contenu et images, bien que nous puissions également fournir ces services
								si nécessaire. Plus vous êtes impliqué dans le site (pas trop quand même …), plus le site vous ressemblera.
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section24")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Comment commencer le processus de conception de site web ?</h2>
						{visibleSections.section24 && (
							<p>
								Pour commencer, contactez-nous pour une consultation gratuite. Nous discuterons de vos besoins, de vos objectifs, et nous fournirons
								un devis détaillé.
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section25")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Comment puis-je payer pour vos services ?</h2>
						{visibleSections.section25 && (
							<p>Nous acceptons une variété de méthodes de paiement, y compris les virements bancaires, les cartes de crédit, Paypal, etc.</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section26")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Offrez-vous des services de sécurité de site web ?</h2>
						{visibleSections.section26 && (
							<p>
								Oui, la sécurité de votre site web est une priorité pour nous. Nous offrons une variété de services pour aider à protéger son site
								contre les menaces en ligne.
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section27")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Fournissez-vous des services d&apos;intégration de médias sociaux ?</h2>
						{visibleSections.section27 && (
							<p>Oui, nous pouvons intégrer vos comptes de médias sociaux avec votre site web pour aider à augmenter l&apos;engagement et la visibilité.</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section28")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Offrez-vous des formations pour la gestion du site ?</h2>
						{visibleSections.section28 && (
							<p>
								Oui, nous offrons des formations pour aider à gérer et à mettre à jour son site web. Quand il s’agit d’un CMS tel que Wordpress,
								c’est assez simple et rapide.
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section29")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Est-ce que vous créez des sites web dynamiques ?</h2>
						{visibleSections.section29 && (
							<p>
								Oui, tous nos sites web sont conçus pour être dynamique et fonctionneront sur tous les supports. Les langages que nous utilisons pour la
								construction du site web est l’essence même d’un site dynamique et réactif.
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section30")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Et si je préfère un site statique ?</h2>
						{visibleSections.section30 && <p>Alors nous créerons un site statique. Ils sont en général légèrement moins onéreux.</p>}
					</div>

					<div onClick={() => toggleParagraph("section31")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Fournissez-vous des services de marketing par email ?</h2>
						{visibleSections.section31 && (
							<p>
								Oui, nous pouvons aider à mettre en place des campagnes de marketing par email pour augmenter l&apos;engagement et la conversion des
								clients.
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section32")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Puis-je faire des modifications sur mon site web moi-même ?</h2>
						{visibleSections.section32 && (
							<p>
								Oui, lorsque nous construisons nos sites sur des CMS, cela permet aux clients de faire leurs propres modifications et mises à jour. Vous
								serez le propriétaire du site, vous serez donc libre d’ajouter tout ce dont vous désirez.
							</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section33")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Offrez-vous des services de marketing sur les réseaux sociaux ?</h2>
						{visibleSections.section33 && (
							<p>Oui, nous pouvons aider à développer et à mettre en œuvre une stratégie de marketing sur les réseaux sociaux.</p>
						)}
					</div>

					<div onClick={() => toggleParagraph("section34")} className={styles.divQuestions}>
						<h2 className={styles.faqH2}>Comment garantissez-vous la qualité de votre travail ?</h2>
						{visibleSections.section34 && (
							<p>
								Nous garantissons la qualité de notre travail grâce à un processus de contrôle de qualité rigoureux qui comprend des tests approfondis et
								des revues
							</p>
						)}
					</div>
				</section>
			</main>
		</div>
	);
}

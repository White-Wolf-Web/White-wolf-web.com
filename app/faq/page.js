import Head from "next/head";
import styles from "@/app/page.module.css";

export default function Faq() {
	return (
		<div className={styles.container}>
			<Head>
				<title>FAQ - Question et reponse facile à comprendre</title>
				<meta name="description" content="Série de questions - réponses facile à comprendre pour vous aider" />
				<link rel="canonical" href="https://www.white-wolf-web.com/faq" />
			</Head>
			<main className={styles.main}>
				<section>
					<h1>FAQ - Foire Aux Questions</h1>
					<h2 className={styles.faqH2}>Qu&apos;est-ce qu&apos;une agence Web ?</h2>
					<p>
						Une agence Web est une entreprise spécialisée dans la création et la gestion de projets digitaux. Cela peut inclure la conception de sites web, le
						marketing digital, le développement d&apos;applications et bien plus encore.
					</p>

					<h2 className={styles.faqH2}>Comment commencer un projet avec notre agence ?</h2>
					<p>
						Vous pouvez commencer en nous contactant via notre formulaire de contact, E-mail, téléphone... Un de nos spécialistes discutera avec vous pour
						comprendre vos besoins et vous proposer la meilleure solution possible.
					</p>

					<h2 className={styles.faqH2}>Quels sont les coûts associés à la création d&apos;un site web ?</h2>
					<p>
						Le coût d&apos;un site web peut varier en fonction de nombreux facteurs, tels que la complexité du design, le nombre de pages, les fonctionnalités
						spécifiques requises, etc. Nous vous fournirons un devis précis après avoir discuté de vos besoins spécifiques.
					</p>

					<h2 className={styles.faqH2}>Quel est le délai de création d&apos;un site web ?</h2>
					<p>
						Le délai de création d&apos;un site web dépend de la complexité du projet. Un site web simple peut être prêt en entre 1 jour à 1 semaine, tandis
						qu&apos;un site web plus complexe peut prendre plusieurs mois. Nous vous donnerons une estimation précise du délai lors de notre première
						discussion.
					</p>
					<h2 className={styles.faqH2}>Pourquoi devrais-je engager une agence Web plutôt que de créer le site moi-même ?</h2>
					<p>
						Les agences Web ont l&apos;expérience et l&apos;expertise pour concevoir des sites Web de qualité professionnelle qui répondent aux besoins
						spécifiques de votre entreprise. Elles s&apos;assurent que votre site est non seulement attrayant, mais aussi fonctionnel et optimisé pour les
						moteurs de recherche. Mais encore une fois tout dépend de ce vous attendez de votre site web.
					</p>

					<h2 className={styles.faqH2}>Proposez-vous des services de maintenance après la création du site Web ?</h2>
					<p>
						Oui, nous offrons divers plans de maintenance qui assurent que votre site reste à jour et sécurisé. Cela peut inclure des mises à jour régulières,
						la résolution de problèmes de sécurité, l&apos;ajout de nouvelles fonctionnalités et bien plus encore.
					</p>

					<h2 className={styles.faqH2}>Quelle est l&apos;importance du référencement (SEO) pour mon site Web ?</h2>
					<p>
						Le SEO est essentiel pour assurer la visibilité de votre site Web sur les moteurs de recherche. Un bon SEO signifie plus de trafic, ce qui peut
						conduire à une augmentation des ventes et des prospects pour votre entreprise.
					</p>

					<h2 className={styles.faqH2}>Puis-je voir des exemples de votre travail précédent ?</h2>
					<p>
						Bien sûr ! Nous serions heureux de vous montrer notre portefeuille de projets passés pour que vous puissiez voir la qualité de notre travail et
						obtenir une idée de ce que nous pourrions faire pour votre entreprise.
					</p>

					<h2 className={styles.faqH2}>Quelles informations dois-je fournir pour commencer un projet ?</h2>
					<p>
						Nous aurons besoin d&apos;une compréhension claire de vos objectifs, de votre public cible, de vos préférences en matière de design et de toute
						autre information spécifique à votre entreprise ou à votre industrie. Plus nous avons d&apos;informations, mieux nous pouvons répondre à vos
						besoins.
					</p>
					<h2 className={styles.faqH2}>Quels types de sites Web créez-vous ?</h2>
					<p>
						Nous créons une variété de sites Web, y compris des sites de E-commerce, des blogs, des des sites d&apos;information, des landing Page, sites
						vitrines etc...
					</p>
					<h2 className={styles.faqH2}>Pouvez-vous aider avec le contenu du site Web ?</h2>
					<p>Oui, nous avons une rédactrice professionnelle qui peut aider à créer du contenu attrayant et optimisé pour le SEO.</p>
					<h2 className={styles.faqH2}>Pouvez-vous aider à améliorer la vitesse de mon site Web ?</h2>
					<p>
						Oui, nous analysons les performances de votre site Web et apporter des modifications pour améliorer la vitesse de chargement des pages. C’est par
						ailleurs un point important pour nous !{" "}
					</p>
					<h2 className={styles.faqH2}>Offrez-vous des services de marketing numérique ?</h2>
					<p>Oui, nous offrons une gamme de services de marketing numérique y compris le SEO, le PPC, le marketing par e-mail, etc.</p>
					<h2 className={styles.faqH2}>Mon site sera-t-il mobile-friendly ?</h2>
					<p>
						Absolument, tous les sites Web que nous concevons sont optimisés pour tous les appareils, y compris les mobiles et les tablettes. C&apos;est
						l&apos;un des points crucial du site.
					</p>
					<h2 className={styles.faqH2}>Offrez-vous des services de re-design de site Web ?</h2>
					<p>Oui, nous pouvons vous aider à moderniser votre site Web existant pour le rendre plus attrayant et performant.</p>
					<h2 className={styles.faqH2}>Utilisez-vous des modèles de site Web ou est-ce que tout est personnalisé ?</h2>
					<p>
						Nous pouvons travailler de deux façons, selon les besoins du client. Nous pouvons personnaliser un modèle existant ou créer un design entièrement
						personnalisé. Mais nous préférons partir d’une feuille blanche.
					</p>
					<h2 className={styles.faqH2}>Offrez-vous un support technique après la mise en ligne du site web ?</h2>
					<p>Oui, nous offrons un support après-vente pour aider nos clients avec tout problème technique qu&apos;ils pourraient rencontrer.</p>
					<h2 className={styles.faqH2}>Fournissez-vous des services d&apos;hébergement web ?</h2>
					<p>Oui, nous offrons des solutions d&apos;hébergement web sécurisées et fiables.</p>
					<h2 className={styles.faqH2}>Comment puis-je suivre les progrès de mon projet ?</h2>
					<p>
						Nous fournissons des mises à jour régulières sur l&apos;avancement du projet et sommes toujours disponibles pour discuter de toute question que
						vous pourriez avoir. Lorsque nous avons un projet assez conséquent, nous organisons régulièrement des réunions, afin que vous puissiez voir
						l’avancement du travail, mais aussi si vous désirez un changement important avant qu’il ne soit trop tard.
					</p>
					<h2 className={styles.faqH2}>Est-ce que mon site web sera optimisé pour les moteurs de recherche (SEO) ?</h2>
					<p>
						Oui, tous les sites web que nous créons sont conçus avec le SEO à l&apos;esprit pour aider à augmenter votre visibilité en ligne. C’est pour nous
						un point important !
					</p>
					<h2 className={styles.faqH2}>Quels types de systèmes de gestion de contenu (CMS) utilisez-vous ?</h2>
					<p>Nous travaillons avec 2 CMS : WordPress, Joomla. Le plus utilisé étant Wordpress.</p>
					<h2 className={styles.faqH2}>Avez-vous de l&apos;expérience avec le E-commerce ?</h2>
					<p>
						Oui, nous avons une grande expérience dans la conception de sites de E-commerce et pouvons vous aider à configurer une boutique en ligne
						sécurisée.
					</p>
					<h2 className={styles.faqH2}>Puis-je vous fournir mes propres images et contenu pour le site web ?</h2>
					<p>
						Absolument, nous encourageons les clients à fournir leur propre contenu et images, bien que nous puissions également fournir ces services si
						nécessaire. Plus vous êtes impliqué dans le site (pas trop quand même …), plus le site vous ressemblera.
					</p>
					<h2 className={styles.faqH2}>Comment commencer le processus de conception de site web ?</h2>
					<p>
						Pour commencer, contactez-nous pour une consultation gratuite. Nous discuterons de vos besoins, de vos objectifs, et nous vous fournirons un devis
						détaillé.
					</p>
					<h2 className={styles.faqH2}>Comment puis-je payer pour vos services ?</h2>
					<p>Nous acceptons une variété de méthodes de paiement, y compris les virements bancaires, les cartes de crédit, Paypal, etc.</p>
					<h2 className={styles.faqH2}>Offrez-vous des services de sécurité de site web ?</h2>
					<p>
						Oui, la sécurité de votre site web est une priorité pour nous. Nous offrons une variété de services pour aider à protéger votre site contre les
						menaces en ligne.
					</p>
					<h2 className={styles.faqH2}>Fournissez-vous des services d&apos;intégration de médias sociaux ?</h2>
					<p>Oui, nous pouvons intégrer vos comptes de médias sociaux avec votre site web pour aider à augmenter l&apos;engagement et la visibilité.</p>
					<h2 className={styles.faqH2}>Offrez-vous des formations pour la gestion du site ?</h2>
					<p>
						Oui, nous offrons des formations pour vous aider à gérer et à mettre à jour votre site web. Quand il s’agit d’un CMS tel que Wordpress, c’est
						assez simple et rapide.
					</p>
					<h2 className={styles.faqH2}>Est-ce que vous créez des sites web dynamiques ?</h2>
					<p>
						Oui, tous nos sites web sont conçus pour être dynamique et fonctionneront sur tous les supports. Les langages que nous utilisons pour la
						construction du site web est l’essence même d’un site dynamique et réactif.
					</p>
					<h2 className={styles.faqH2}>Et si je préfère un site statique ?</h2>
					<p>Alors nous vous créerons un site statique. Ils sont en général légèrement moins onéreux.</p>
					<h2 className={styles.faqH2}>Fournissez-vous des services de marketing par email ?</h2>
					<p>
						Oui, nous pouvons vous aider à mettre en place des campagnes de marketing par email pour augmenter l&apos;engagement et la conversion des clients.
					</p>
					<h2 className={styles.faqH2}>Puis-je faire des modifications sur mon site web moi-même ?</h2>
					<p>
						Oui, lorsque nous construisons nos sites sur des CMS, cela permet aux clients de faire leurs propres modifications et mises à jour. Vous serez le
						propriétaire du site, vous serez donc libre d’ajouter tout ce dont vous désirez.
					</p>
					<h2 className={styles.faqH2}>Offrez-vous des services de marketing sur les réseaux sociaux ?</h2>
					<p>Oui, nous pouvons vous aider à développer et à mettre en œuvre une stratégie de marketing sur les réseaux sociaux.</p>
					<h2 className={styles.faqH2}>Comment garantissez-vous la qualité de votre travail ?</h2>
					<p>
						Nous garantissons la qualité de notre travail grâce à un processus de contrôle de qualité rigoureux qui comprend des tests approfondis et des
						revues{" "}
					</p>
				</section>
			</main>
		</div>
	);
}

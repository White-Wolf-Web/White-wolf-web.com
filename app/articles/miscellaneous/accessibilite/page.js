import styles from "@/app/page.module.css";

export const metadata = {
	title: "Accessibilité: Un web accessible à tous grâce à WAI-ARIA 🌐",
	description:
		"Nous mettons un point d’honneur à concevoir des sites web accessibles, conformes aux normes WAI-ARIA, pour offrir une meilleure expérience en ligne à tous.",
		alternates: {
			canonical: "https://www.white-wolf-web.com/articles/miscellaneous/accessibilite",
		}, openGraph: {
			title: "Accessibilité: Un web accessible à tous grâce à WAI-ARIA 🌐",
			description:
				"Nous mettons un point d’honneur à concevoir des sites web accessibles, conformes aux normes WAI-ARIA, pour offrir une meilleure expérience en ligne à tous.",
			url: "https://www.white-wolf-web.com/articles/miscellaneous/accessibilite",
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

export default function Accessibility() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<header>
					<h1 className={styles.title}>L&apos;accessibilité web, un enjeu universel 🌐🤲</h1>
					<h2 className={styles.titleH2}>Rendre le web accessible à tous grâce à WAI-ARIA 🌐🤲</h2>
				</header>
				<p>
					L&apos;accessibilité sur le web ne constitue pas seulement une considération technique ; c&apos;est avant tout une question de droit humain. Dans un
					monde de plus en plus numérisé, garantir l&apos;équité et l&apos;inclusion pour tous les utilisateurs, indépendamment de leurs capacités, devient une
					priorité impérative.
				</p>

				<ul>
					<li>Handicap moteur</li>
					<li>Handicap psychique</li>
					<li>Handicap auditif (utilisateurs sourds ou malentendants)</li>
					<li>Handicap visuel (utilisateurs aveugles ou malvoyants, trouble de la vision, daltonisme…).</li>
					<li>Handicap lié au vieillissement (&apos;Senior&apos;)</li>
					<li>Handicap cognitif (génétique, dyslexie, TDAH (trouble de l’attention avec hyperactivité), trouble de l’apprentissage …)</li>
				</ul>
				<p>
					Face à ces divers besoins, la mise en place de normes d&apos;accessibilité web s&apos;avère cruciale. Parmi les plus notables figurent les normes
					WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications), développées par le W3C, le consortium mondial qui établit les
					standards du web.
				</p>
				<p>
					La mission de WAI-ARIA est d&apos;établir des directives permettant de rendre les applications web riches et interactives accessibles à tous. Ces
					recommandations englobent diverses techniques, telles que l&apos;amélioration de la navigation au clavier, la fourniture d&apos;informations sur
					l&apos;état et les rôles des éléments, ainsi que la facilitation de l&apos;interaction avec les technologies d&apos;assistance, telles que les
					lecteurs d&apos;écran.
				</p>
				<p>
					S&apos;appuyant sur ces normes, les développeurs et concepteurs web peuvent prendre des mesures concrètes pour rendre leurs sites web plus
					accessibles. Voici quelques exemples de ces mesures :
				</p>
				<p>
					1. <strong>Utilisation de balises ARIA</strong>: Ces balises permettent de décrire les éléments interactifs et leur état, facilitant ainsi la
					compréhension des utilisateurs de lecteurs d&apos;écran.
				</p>
				<p>
					2. <strong>Conception d&apos;une navigation au clavier intuitive et cohérente</strong> : Cette mesure permet aux personnes qui ne peuvent pas utiliser
					une souris de naviguer facilement sur le site.
				</p>
				<p>
					3.
					<strong>
						Respect des contrastes de couleurs et mise en place de fonctionnalités d&apos;ajustement pour les utilisateurs ayant des problèmes de vision
					</strong>
					: Cela aide à rendre le site utilisable et confortable pour tous les utilisateurs, quel que soit leur niveau de vision.
				</p>
				<p>
					4. <strong>Fourniture de transcriptions et de sous-titres pour les contenus audiovisuels</strong> : Cela garantit que le contenu multimédia est
					accessible aux personnes malentendantes.
				</p>
				<p>
					5.
					<strong>
						Réalisation d&apos;audits d&apos;accessibilité réguliers et mise à jour du site pour maintenir la conformité avec les standards en vigueur
					</strong>
					: Cette étape est cruciale pour maintenir l&apos;accessibilité du site à long terme.
				</p>

				<p>
					L&apos;accessibilité ne se limite pas à répondre aux besoins des utilisateurs handicapés. De nombreuses innovations, initialement conçues pour pallier
					un handicap, sont désormais des éléments clés de notre quotidien. Parmi ces inventions, on peut citer :{" "}
				</p>

				<ul>
					<li>Le sous titrage d’un film </li>
					<li>La rampe d’escalier</li>
					<li>Le SMS (texto)</li>
					<li>La télécommande</li>
					<li>Les podcasts</li>
					<li>Le vibreur de votre téléphone (GSM)</li>
					<li>Le régulateur de vitesse</li>
					<li>L’ascenseur</li>
					<li>Les lunettes de soleil</li>
				</ul>
				<p>
					Investir dans un site web accessible présente donc de nombreux avantages. Non seulement cela élargit l&apos;audience potentielle, mais cela améliore
					également l&apos;expérience utilisateur pour tous. Les moteurs de recherche actuels tendent d&apos;ailleurs à favoriser les sites présentant une
					accessibilité optimale.
				</p>
				<p>
					Dans un monde où le digital est omniprésent, il est du devoir de chacun de contribuer à créer un web plus inclusif. L&apos;accessibilité n&apos;est
					pas une option, c&apos;est un droit. Il est temps de rendre le monde en ligne accessible à tous, un site à la fois. 🌐🤲
				</p>
			</main>
		</div>
	);
}

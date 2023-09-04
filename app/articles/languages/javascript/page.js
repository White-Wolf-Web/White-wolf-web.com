import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/app/page.module.css";
import JavascriptIcon from "@/public/Assets/Icons/javascript-icon.webp";
import FrameworkLangIcons from "@/components/FrameworkLangLogo/FrameworkLangIcons";

export default function javascript() {
	return (
		<>
			<Head>
				<title>JavaScript: le Langage de Programmation Fondamental du Web</title>
				<meta
					name="description"
					content="Explorez JavaScript  avec ses principes fondamentaux, ses fonctionnalités, son écosystème et son rôle incontournable dans le développement web d'aujourd'hui"
				/>
				<link rel="canonical" href="https://www.white-wolf-web.com/articles/languages/javascript" />
			</Head>
			<main className={styles.container}>
				<h1>JavaScript : Comprendre le Langage de Programmation Fondamental du Web</h1>
				<Image src={JavascriptIcon} className={styles.languagesIcon} width={100} height={100} alt="Javascript icon" />
				<section className={styles.languageSection}>
					<h2 className={styles.javascriptColor}>Introduction à JavaScript</h2>
					<p>
						JavaScript est un langage de programmation dynamique haut niveau, principalement connu pour son utilisation dans le développement web côté client.
						Il est à l&apos;origine de la plupart des comportements interactifs que vous voyez sur les sites web modernes. Que ce soit une image qui change
						lorsque vous passez votre souris dessus, un formulaire de connexion qui se déploie lorsque vous cliquez sur un bouton, ou une page web qui se met
						à jour en temps réel sans avoir besoin de la rafraîchir, JavaScript est la force motrice derrière tout cela.
					</p>
					<p>
						JavaScript est aussi le seul langage de programmation qui peut être exécuté nativement dans un navigateur web, ce qui en fait un outil essentiel
						pour toute personne qui travaille dans le développement web. De plus, avec l&apos;introduction de Node.js, JavaScript a également trouvé sa place
						dans le développement côté serveur, faisant de lui un langage de programmation universel.
					</p>
				</section>
				<section className={styles.languageSection}>
					<h2 className={styles.javascriptColor}>L&apos;histoire de JavaScript</h2>
					<p>
						JavaScript a été créé en 1995 par Brendan Eich, alors employé de Netscape Communications. À l&apos;époque, le web était encore à ses débuts et les
						navigateurs n&apos;étaient utilisés que pour visualiser du contenu statique. Eich a été chargé de créer un langage de programmation pour le
						navigateur Netscape Navigator afin de rendre le web plus dynamique et interactif.
					</p>
					<p>
						Eich a conçu JavaScript en seulement dix jours. Malgré ce laps de temps incroyablement court, il a réussi à créer un langage de programmation
						puissant qui continue d&apos;alimenter le web dynamique que nous connaissons aujourd&apos;hui.
					</p>
				</section>
				<section className={styles.languageSection}>
					<h2 className={styles.javascriptColor}>Principes Fondamentaux de JavaScript</h2>
					<p>
						JavaScript est un langage de programmation dynamique et faiblement typé. Cela signifie que les variables n&apos;ont pas de type fixe et peuvent
						être modifiées à la volée. Par exemple, une variable peut commencer comme un nombre et ensuite être changée en une chaîne de caractères.
					</p>
					<p>
						JavaScript supporte plusieurs paradigmes de programmation, ce qui signifie que vous pouvez l&apos;utiliser pour écrire du code impératif (comme le
						C), du code orienté objet (comme Java) ou du code fonctionnel (comme Lisp). Cela fait de JavaScript un langage de programmation très flexible qui
						peut s&apos;adapter à différents styles de codage.
					</p>
				</section>
				<section className={styles.languageSection}>
					<h2 className={styles.javascriptColor}>Fonctionnalités clés de JavaScript</h2>
					<p>
						JavaScript offre un certain nombre de fonctionnalités puissantes qui en font un choix idéal pour le développement web. Parmi celles-ci, nous
						avons:
					</p>
					<ul>
						<li>
							Manipulation du DOM : Le Document Object Model (DOM) est une représentation en arbre de tous les éléments d&apos;une page web. JavaScript peut
							manipuler le DOM pour ajouter, supprimer ou modifier du contenu, ce qui rend votre page web interactive.
						</li>
						<li>
							Gestion des événements : JavaScript permet de réagir à des événements tels que les clics de souris, les pressions de touches, les mouvements
							de la souris, etc.
						</li>
						<li>
							Asynchronicité : JavaScript peut exécuter des tâches en arrière-plan pendant que le reste de votre code continue de s&apos;exécuter. Cela
							permet de créer des applications web qui ne bloquent pas l&apos;utilisateur pendant qu&apos;elles chargent ou traitent des données.
						</li>
					</ul>
				</section>
				<section className={styles.languageSection}>
					<h2 className={styles.javascriptColor}>L&apos;Evolution de JavaScript</h2>
					<p>
						Bien sûr, voici la suite de l&apos;article : V. L&apos;Evolution de JavaScript (300 mots) JavaScript a subi plusieurs mises à jour majeures au
						cours de sa vie. En 1997, il a été standardisé par l&apos;ECMA International, une organisation de normalisation pour les technologies de
						l&apos;information et de la communication. Cette standardisation, connue sous le nom d&apos;ECMAScript, définit le langage de base de JavaScript
						et est mise à jour régulièrement. Aujourd&apos;hui, nous en sommes à ECMAScript 2021.
					</p>
					<p>
						Des versions plus récentes d&apos;ECMAScript ont introduit des fonctionnalités importantes pour JavaScript, comme les promesses pour un meilleur
						contrôle de l&apos;asynchronicité, les classes pour faciliter la programmation orientée objet, et l&apos;interpolation de chaînes de caractères
						avec les modèles de chaînes de caractères (template strings), parmi beaucoup d&apos;autres.
					</p>
				</section>
				<section className={styles.languageSection}>
					<h2 className={styles.javascriptColor}>JavaScript dans le Navigateur et Côté Serveur avec Node.js </h2>
					<p>
						L&apos;une des caractéristiques uniques de JavaScript est sa capacité à fonctionner à la fois côté client et côté serveur. Côté client, JavaScript
						est utilisé pour créer des sites web interactifs et dynamiques. C&apos;est le seul langage de programmation qui peut être exécuté directement dans
						un navigateur web, sans nécessiter de compilation ou d&apos;installation préalable.
					</p>
					<p>
						Côté serveur, JavaScript a gagné en popularité grâce à Node.js, une plateforme qui permet d&apos;exécuter du JavaScript en dehors du navigateur.
						Node.js utilise le moteur JavaScript V8 de Google Chrome pour exécuter du code JavaScript à une vitesse impressionnante, ce qui en fait un
						excellent choix pour le développement de serveurs web, d&apos;APIs, de scripts et d&apos;outils en ligne de commande.
					</p>
				</section>
				<section className={styles.languageSection}>
					<h2 className={styles.javascriptColor}>L&apos;Écosystème JavaScript : Frameworks et Bibliothèques </h2>
					<p>
						L&apos;écosystème JavaScript est riche et diversifié, avec de nombreux frameworks et bibliothèques qui facilitent le développement web. Ces outils
						résolvent des problèmes courants et fournissent des structures pour organiser le code, ce qui permet aux développeurs de se concentrer sur la
						logique spécifique à leur application.
					</p>
					<p>
						Parmi les plus populaires, on retrouve React.js pour la construction d&apos;interfaces utilisateurs, Vue.js pour la création d&apos;interfaces
						utilisateurs dynamiques et simples, Angular pour la création d&apos;applications web robustes, et Express.js pour le développement de serveurs web
						en Node.js.
					</p>
				</section>
				<section className={styles.languageSection}>
					<h2 className={styles.javascriptColor}>Mise en Place de Tests en JavaScript</h2>
					<p>
						Les tests sont une partie importante du développement en JavaScript. Ils permettent de vérifier que le code fonctionne comme prévu et aident à
						prévenir les régressions lors de l&apos;ajout de nouvelles fonctionnalités. Des outils de test tels que Jest, Mocha et Jasmine offrent un
						environnement pour écrire et exécuter des tests en JavaScript.
					</p>
				</section>
				<section className={styles.languageSection}>
					<h2 className={styles.javascriptColor}>L&apos;Avenir de JavaScript</h2>
					<p>
						L&apos;avenir de JavaScript semble prometteur. L&apos;évolution constante d&apos;ECMAScript, l&apos;adoption croissante de Node.js pour le
						développement côté serveur, et l&apos;innovation continue dans l&apos;écosystème des frameworks et des bibliothèques font de JavaScript un choix
						de plus en plus puissant pour le développement web.
					</p>
					<p>
						En résumé, JavaScript est plus qu&apos;un simple langage de programmation. C&apos;est une technologie essentielle qui a façonné le web tel que
						nous le connaissons aujourd&apos;hui, et qui continuera à jouer un rôle clé dans le développement du web de demain.
					</p>
					<p>
						Ainsi se conclut notre voyage à travers l&apos;univers de JavaScript. Que vous soyez un développeur débutant ou expérimenté, j&apos;espère que ce
						guide vous a fourni des informations utiles et a stimulé votre intérêt pour ce langage de programmation fascinant.
					</p>
				</section>
				<FrameworkLangIcons />
			</main>
		</>
	);
}

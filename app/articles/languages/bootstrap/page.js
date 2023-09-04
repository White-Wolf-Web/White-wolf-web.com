import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/app/page.module.css";
import BootstrapIcon from "@/public/Assets/Icons/bootstrap.webp";
import FrameworkLangIcons from "@/components/FrameworkLangLogo/FrameworkLangIcons";

export default function bootstrap() {
	return (
		<>
			<Head>
				<title>Bootstrap : Une Exploration Détaillée</title>
				<meta
					name="description"
					content="Un aperçu complet de Bootstrap, de sa création à aujourd’hui, en passant par ses fonctionnalités, son évolution, comment il a façonné le développement web"
				/>
				<link rel="canonical" href="https://www.white-wolf-web.com/articles/languages/bootstrap" />
			</Head>
			<main className={styles.container}>
				<h1>Bootstrap le framework CSS & JS</h1>

				<section className={styles.languageSection}>
					<h2 className={styles.bootstrapColor}>Introduction à Bootstrap</h2>
					<p>
						Bootstrap est un framework CSS open source qui aide les développeurs à concevoir rapidement et facilement des sites web réactifs et mobiles.
						Depuis sa création en 2011 par Mark Otto et Jacob Thornton de Twitter, Bootstrap a révolutionné le développement web front-end par sa simplicité
						et sa flexibilité.
					</p>
					<p>
						Bootstrap offre une variété de composants réutilisables tels que des boutons, des formulaires, des menus déroulants et bien plus encore. Ces
						composants sont entièrement personnalisables, permettant aux développeurs de créer des sites web uniques tout en conservant un code propre et
						standardisé. En outre, Bootstrap comprend également un système de grille flexible qui facilite la création de mises en page réactives.
					</p>
				</section>
				<Image src={BootstrapIcon} className={styles.languagesIcon} width={126} height={100} alt="Html5" />
				<section className={styles.languageSection}>
					<h2 className={styles.bootstrapColor}>Pourquoi Bootstrap a-t-il été créé ?</h2>
					<p>
						Bootstrap a été créé pour résoudre une problématique que rencontraient les développeurs de Twitter : la cohérence du code. Avec de nombreux
						développeurs travaillant sur des projets différents, le code CSS de Twitter devenait de plus en plus désorganisé et difficile à maintenir.{" "}
					</p>
					<p>
						Bootstrap a été introduit comme un ensemble de règles de développement cohérentes et standardisées pour améliorer la qualité du code, la
						productivité des développeurs et l&apos;expérience utilisateur.
					</p>
				</section>
				<section className={styles.languageSection}>
					<h2 className={styles.bootstrapColor}>Comment fonctionne Bootstrap ?</h2>
					<p>
						Bootstrap fonctionne en offrant aux développeurs un ensemble de classes CSS prédéfinies qu&apos;ils peuvent utiliser pour styliser leurs sites
						web. Par exemple, pour créer un bouton, un développeur peut simplement utiliser la classe &apos;btn&apos; sur un élément HTML. Pour modifier
						l&apos;apparence du bouton, le développeur peut ajouter des classes supplémentaires, comme &apos;btn-primary&apos; pour un bouton bleu ou
						&apos;btn-lg&apos; pour un bouton plus grand.
					</p>
					<p>
						En plus de ses classes CSS, Bootstrap comprend également des composants JavaScript qui ajoutent de l&apos;interactivité à votre site web, tels que
						les menus déroulants, les carrousels d&apos;images et les modales. Ces composants sont construits avec jQuery, mais à partir de Bootstrap 5, ils
						sont également disponibles en JavaScript pur.
					</p>
				</section>
				<section className={styles.languageSection}>
					<h2 className={styles.bootstrapColor}>L&apos;Impact de Bootstrap sur le Développement Web</h2>
					<p>
						Bootstrap a eu un impact énorme sur le développement web. Avant son introduction, la création de sites web réactifs et cohérents nécessitait
						beaucoup de travail et de temps. Bootstrap a simplifié ce processus en fournissant un ensemble de styles et de composants prêts à l&apos;emploi
						que les développeurs peuvent utiliser pour créer rapidement des sites web professionnels.
					</p>
					<p>
						De plus, Bootstrap a facilité la création de sites web réactifs. Avant Bootstrap, la création de sites web qui s&apos;adaptent à différentes
						tailles d&apos;écran était un défi. Avec son système de grille réactif et ses classes utilitaires, Bootstrap a rendu ce processus beaucoup plus
						facile et plus intuitif.
					</p>
				</section>
				<section className={styles.languageSection}>
					<h2 className={styles.bootstrapColor}>L&apos;Evolution de Bootstrap</h2>
					<p>
						Depuis sa création en 2011, Bootstrap a subi plusieurs mises à jour majeures. Chaque version a apporté des améliorations et des nouvelles
						fonctionnalités pour aider les développeurs à créer des sites web de meilleure qualité.
					</p>
					<p>
						La version actuelle, Bootstrap 5, a été publiée en 2020. Elle a introduit plusieurs changements importants, notamment l&apos;abandon de la
						dépendance à jQuery, le passage à des variables CSS personnalisables et l&apos;amélioration de la grille pour supporter mieux les designs
						modernes.
					</p>
				</section>
				<section className={styles.languageSection}>
					<h2 className={styles.bootstrapColor}>Utilisation de Bootstrap Aujourd&apos;hui</h2>
					<p>
						Aujourd&apos;hui, Bootstrap est largement utilisé par les développeurs du monde entier pour construire des sites web réactifs rapidement et
						efficacement. Il est utilisé aussi bien par les grandes entreprises que par les développeurs indépendants pour créer une variété de sites web,
						allant des blogs personnels aux applications web complexes.
					</p>
					<p>
						De plus, Bootstrap a une grande communauté de développeurs qui contribuent à son développement, créent des thèmes et des plugins, et offrent de
						l&apos;aide à ceux qui en ont besoin. Avec sa facilité d&apos;utilisation, sa flexibilité et son soutien communautaire, Bootstrap reste l&apos;un
						des frameworks CSS les plus populaires.
					</p>
				</section>
				<section className={styles.languageSection}>
					<h2 className={styles.bootstrapColor}>L&apos;Avenir de Bootstrap</h2>
					<p>
						L&apos;avenir de Bootstrap semble prometteur. Avec le développement constant de nouvelles fonctionnalités et améliorations, Bootstrap continuera
						probablement à jouer un rôle clé dans le développement web front-end.
					</p>
				</section>
				<section className={styles.languageSection}>
					<p>
						En conclusion, Bootstrap est plus qu&apos;un simple framework CSS. C&apos;est un outil puissant qui a révolutionné le développement web et
						continue d&apos;aider les développeurs à créer des sites web de qualité. Que vous soyez un développeur débutant ou expérimenté, Bootstrap a
						quelque chose à offrir pour vous faciliter la tâche.
					</p>
				</section>

				<FrameworkLangIcons />
			</main>
		</>
	);
}

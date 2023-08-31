import Head from "next/head";
import styles from "../../Styles/page.module.css";

export default function PolitiqueConfidentialite() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Politique de confidentialité white wolf web srl</title>
				<meta
					name="description"
					content="Cette page concerne la politique de confidentialité pour notre site web et uniquement celui-ci. Merci à White  Wolf Web. "
				/>
				<link rel="canonical" href="https://www.white-wolf-web.com/admin/politique-confidentialite" />
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>Politique de confidentialité</h1>
				<p>
					Bienvenue sur www.white-wolf-web.com. Cette page vous explique nos politiques en matière de collecte, d&apos;utilisation et de divulgation des
					informations personnelles lorsque vous utilisez notre Service.
					<br />
					Nous utilisons vos informations personnelles pour fournir et améliorer le Service. En utilisant le Service, vous acceptez la collecte et
					l&apos;utilisation d&apos;informations conformément à cette politique.{" "}
				</p>
				<h2>Cookies</h2>
				<p>
					Nous utilisons des « cookies » pour collecter des informations. Vous pouvez demander à votre navigateur de refuser tous les cookies ou d&apos;indiquer
					quand un cookie est envoyé. Cependant, si vous n&apos;acceptez pas les cookies, il se peut que vous ne puissiez pas utiliser certaines parties de
					notre Service.
				</p>
				<h2>Sécurité</h2>
				<p>
					La sécurité de vos informations personnelles est importante pour nous, mais n&apos;oubliez pas qu&apos;aucune méthode de transmission sur Internet ou
					de stockage électronique n&apos;est sécurisée à 100%. Bien que nous nous efforcions d&apos;utiliser des moyens commercialement acceptables pour
					protéger vos informations personnelles, nous ne pouvons garantir leur sécurité absolue.
				</p>
				<h2>Liens vers d&apos;autres sites</h2>
				<p>
					Notre Service peut contenir des liens vers d&apos;autres sites qui ne sont pas exploités par nous. Si vous cliquez sur un lien vers un autre site,
					vous serez dirigé vers le site de cet tiers. Nous vous recommandons vivement de consulter la politique de confidentialité de chaque site que vous
					visitez.
				</p>
				<h2>Modifications de cette politique de confidentialité</h2>{" "}
				<p>
					Nous pouvons mettre à jour notre politique de confidentialité de temps en temps. Nous vous informerons de tout changement en publiant la nouvelle
					politique de confidentialité sur cette page.
				</p>
			</main>
		</div>
	);
}

import Testimonials from "@/components/Testimonials/Testimonials";
import styles from "@/app/page.module.css";
// import { Metadata } from "next";

export const metadata = {
	title: "Les commentaires & avis laissés par nos clients",
	description: "Vous retrouverez ici quelques commentaires que nous ont laissé nos derniers clients suite au travail que nous avons éffectué pour eux",
	alternates: {
		canonical: "https://www.white-wolf-web.com/rating",

		openGraph: {
			title: "Les commentaires & avis laissés par nos clients",
			description: "Vous retrouverez ici quelques commentaires que nous ont laissé nos derniers clients suite au travail que nous avons éffectué pour eux.",
			url: "https://www.white-wolf-web.com/rating",
			siteName: "Nos tarifs pour un site web",
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
	},
};

export default function Rating() {
	return (
		<div className={styles.marginAuto}>
			<h1>Testimonials</h1>
			<Testimonials />
		</div>
	);
}

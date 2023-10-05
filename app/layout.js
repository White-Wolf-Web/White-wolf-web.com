import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Importer le bootstrap CSS import "../styles/globals.css" ;
import "../styles/custom-bootstrap.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Agence experte en création de sites web 💻 - SEO",
	description:
		"Agence Web innovante: création de sites web, e-commerce, design, accessibilité, référencement SEO et marketing digital pour propulser votre succès en ligne!🚀💻",
	referrer: "origin-when-cross-origin",
	authors: "Stephane Gamot",
	colorScheme: "dark",
	themeColor: 'black',
	metadataBase: new URL('https://www.white-wolf-web.com'),
	alternates: {
		canonical: '/',
	  },
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
		},
	},
	viewport: {
		width: "device-width",
		initialScale: 1
		
	},
	manifest: "/manifest.json",
	icons: {
		icon: "@/Assets/Favicons/icon-192x192.png",
		apple: "@/Assets/Favicons/icon-256x256.png",
	},

	openGraph: {
		title: "White Wolf Web - Agence experte en création de sites web 💻 - SEO",
		description:
			"Agence Web innovante: création de sites web, e-commerce, design, accessibilité, référencement SEO et marketing digital pour propulser votre succès en ligne!🚀💻",
		url: "https://www.white-wolf-web.com",
		siteName: "Agence White Wolf Web",
		images: [
			{
				url: "https://www.white-wolf-web.com/public/Assets/Images/Jpg/facebook/moi-facebook.jpg",
				width: 800,
				height: 600,
				alt: "moi un jour quand je serais à la retraite",
			},
		],
		locale: "fr-fr",
		type: "website",
	},

	twitter: {
		card: "summary_large_image",
		title: "Agence Web innovante: création de sites web, e-commerce pour propulser votre succès en ligne!🚀",
		description: "White Wolf Web, c'est l'alliance du design attrayant et des fonctionnalités optimales pour créer des sites web performants et élégants.",
		siteId: "@whitewo26072430",
		site: "Agence White Wolf Web",
		creator: "@whitewo26072430",
		//creatorId: "1467726470533754880",
		images: ["https://twitter.com/whitewo26072430/header_photo"],
		imageAlt:"Moi derriere mon PC"
	},
	verification: {
		google: "google",
		yandex: "yandex",
		yahoo: "yahoo",
	},
};

export default function RootLayout({ children }) {
	
	return (
		<html lang="fr">
			<body className={inter.className}>
				<Header />
				<main> {children}</main>
				<Footer />
			</body>
		</html>
	);
}

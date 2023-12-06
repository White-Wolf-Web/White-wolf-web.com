import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Importer le bootstrap CSS import "../styles/globals.css" ;
import "../styles/custom-bootstrap.css";
import { Inter, EB_Garamond } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
//import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";
// import CookieBanner from "@/components/cookies/cookiebanner";
// import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const garamond = EB_Garamond ({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
  })

export const metadata = {
	title: "Agence experte en création de sites web - SEO",
	description:
		"Agence Web innovante: création de site web, e-commerce, design, accessibilité, référencement SEO et marketing digital afin de propulser votre succès en ligne!🚀💻",
	referrer: "origin-when-cross-origin",
	authors: "Stephane Gamot", 
	colorScheme: "dark",
	themeColor: "black",
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			imageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
		},
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
	},
	manifest: "/manifest.json",
	icons: {
		icon: "@/Assets/Favicons/icon-192x192.png",
		apple: "@/Assets/Favicons/icon-256x256.png",
	},

	openGraph: {
		title: "Agence experte en création de sites web - SEO",
		description:
			"Agence Web innovante: création de site web, e-commerce, design, accessibilité, référencement SEO et marketing digital afin de propulser votre succès en ligne!🚀💻",
		url: "https://www.white-wolf-web.com",
		siteName: "Création site web & SEO",
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

	twitter: {
		card: "summary_large_image",
		title: "Agence Web innovante: création de sites web, e-commerce pour propulser votre succès en ligne!🚀",
		description: "C'est l'alliance du design attrayant et des fonctionnalités optimales pour créer des sites web performants et élégants.",
		siteId: "@whitewo26072430",
		site: "Agence White Wolf Web",
		creator: "@whitewo26072430",
		images: ["https://twitter.com/whitewo26072430/header_photo"],
		imageAlt: "Moi derriere mon PC",
	},
	verification: {
		google: "google",
		yandex: "yandex",
		yahoo: "yahoo",
	},
	//other: { name:"google-site-verification", content:"" },
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
		
			<body className={inter.className}>
				{/*<GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />*/}
				<Header />
				<main> {children}</main>
				<Footer />
				{/*<CookieBanner />*/}
			</body>
		</html>
	);
}

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Importer le bootstrap CSS import "../styles/globals.css" ;
import "../styles/custom-bootstrap.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "White Wolf Web - Agence experte en création de sites web 💻 - SEO",
	description:
		"Agence Web innovante: création de sites web, e-commerce, design, accessibilité, référencement SEO et marketing digital pour propulser votre succès en ligne!🚀💻",
	referrer: "origin-when-cross-origin",
	authors: "Stephane Gamot",
	colorScheme: "dark",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	
		canonical: "/",
		languages: "fr-fr",
	
	openGraph: {
		title: "White Wolf Web - Agence experte en création de sites web 💻 - SEO",
		description:
			"Agence Web innovante: création de sites web, e-commerce, design, accessibilité, référencement SEO et marketing digital pour propulser votre succès en ligne!🚀💻",
		url: "https://www.white-wolf-web.com",
		siteName: "Agence White Wolf Web",
		images: [
			{
				url: "https://nextjs.org/og.png",
				width: 800,
				height: 600,
			},
			{
				url: "https://nextjs.org/og-alt.png",
				width: 1800,
				height: 1600,
				alt: "My custom alt",
			},
		],
		locale: "fr-fr",
		type: "website",
	},
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/icon.png",
		shortcut: "/shortcut-icon.png",
		apple: "/apple-icon.png",
		other: {
			rel: "apple-touch-icon-precomposed",
			url: "/apple-touch-icon-precomposed.png",
		},
	},
	manifest: "https://nextjs.org/manifest.json",
	twitter: {
		card: "summary_large_image",
		title: "Next.js",
		description: "The React Framework for the Web",
		siteId: "1467726470533754880",
		creator: "@nextjs",
		creatorId: "1467726470533754880",
		images: ["https://nextjs.org/og.png"],
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
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

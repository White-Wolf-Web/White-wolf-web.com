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

const withPWA = require("next-pwa")({
	dest: "public",
});

module.exports = withPWA({
	// next.js config
});

module.exports = {
	async redirects() {
		return [
			{
				source: "/reseaux-sociaux",
				destination: "/articles/reseaux-sociaux",
				permanent: true,
			},
			{
				source: "/reseaux-sociaux/snapchat",
				destination: "/articles/reseaux-sociaux#snapchat",
				permanent: true,
			},
			{
				source: "/articles/contenu-et-redaction-votre-site-internet",
				destination: "/articles/miscellaneous/contenu-et-redaction-votre-site-internet",
				permanent: true,
			},
			{
				source: "/reseaux-sociaux/facebook",
				destination: "/articles/reseaux-sociaux#facebook",
				permanent: true,
			},
			{
				source: "/reseaux-sociaux/linkedin",
				destination: "/articles/reseaux-sociaux#linkedin",
				permanent: true,
			},
			{
				source: "/webdesign",
				destination: "/articles/web-design",
				permanent: true,
			},
			{
				source: "/creation-site-web/ecommerce",
				destination: "/articles/creation-site-web#site-Ecommerce",
				permanent: true,
			},
			{
				source: "/contact",
				destination: "/",
				permanent: true,
			},
			{
				source: "/a-propos",
				destination: "/",
				permanent: true,
			},
			{
				source: "/creation-site-web/site-mobile",
				destination: "/articles/creation-site-web#siteMobile",
				permanent: true,
			},
			{
				source: "/articles/training-support",
				destination: "/articles/miscellaneous/formation-accompagnement",
				permanent: true,
			},
			{
				source: "/cybersecurite",
				destination: "/",
				permanent: true,
			},
			{
				source: "/articles/email-marketing-automatisation",
				destination: "/articles/miscellaneous/formation-accompagnement",
				permanent: true,
			},
			{
				source: "/creation-site-web",
				destination: "/articles/creation-site-web",
				permanent: true,
			},
			{
				source: "/creation-site-web/portail-web",
				destination: "/articles/creation-site-web#landingPage",
				permanent: true,
			},
			{
				source: "/creation-site-web/portfolio",
				destination: "/articles/creation-site-web#portfolio",
				permanent: true,
			},
			{
				source: "/reseaux-sociaux/tiktok",
				destination: "/articles/reseaux-sociaux#tiktok",
				permanent: true,
			},
			{
				source: "/reseaux-sociaux/pinterest",
				destination: "/articles/reseaux-sociaux#pinterest",
				permanent: true,
			},
			{
				source: "/reseaux-sociaux/teams",
				destination: "/articles/reseaux-sociaux#teams",
				permanent: true,
			},
			{
				source: "/reseaux-sociaux/discord",
				destination: "/articles/reseaux-sociaux#discord",
				permanent: true,
			},
			{
				source: "/reseaux-sociaux/whatsapp",
				destination: "/articles/reseaux-sociaux#whatsapp",
				permanent: true,
			},
			{
				source: "/articles/analyse-audit-performance-votre-site-web",
				destination: "/articles/miscellaneous/analyse-audit-performance-votre-site-web",
				permanent: true,
			},
		];
	},
};

/* const withPWA = require("next-pwa");

module.exports = {
	i18n: {
		locales: ["fr"],
		defaultLocale: "fr",
		localeDetection: false,
	},

	...withPWA({
		pwa: {
			dest: "public",
			skipWaiting: true,
			clientsClaim: true,
		},
	}),
};

*/

/** @type {import('next').NextConfig} 
const nextConfig = {}

module.exports = nextConfig
*/

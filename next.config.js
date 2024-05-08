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
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/reseaux-sociaux/snapchat",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/articles/reseaux-sociaux/snapchat",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/articles/contenu-et-redaction-votre-site-internet",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/reseaux-sociaux/facebook",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},

			{
				source: "/articles/reseaux-sociaux/linkedin",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/webdesign",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/creation-site-web/ecommerce",
				destination: "https://www.creation-site-internet.dev/web",
				permanent: true,
			},
			{
				source: "/contact",
				destination: "https://www.creation-site-internet.dev/#contact",
				permanent: true,
			},
			{
				source: "/a-propos",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/creation-site-web/site-mobile",
				destination: "https://www.creation-site-internet.dev/web",
				permanent: true,
			},
			{
				source: "/articles/training-support",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/trainingAndSupport",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/cybersecurite",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/articles/email-marketing-automatisation",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/creation-site-web",
				destination: "https://www.creation-site-internet.dev/web",
				permanent: true,
			},
			{
				source: "/creation-site-web/portail-web",
				destination: "https://www.creation-site-internet.dev/web",
				permanent: true,
			},
			{
				source: "/creation-site-web/portfolio",
				destination: "https://www.creation-site-internet.dev/web",
				permanent: true,
			},
			{
				source: "/reseaux-sociaux/tiktok",
				destination: "https://www.creation-site-internet.dev/web",
				permanent: true,
			},
			{
				source: "/reseaux-sociaux/pinterest",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/reseaux-sociaux/teams",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/reseaux-sociaux/discord",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/reseaux-sociaux/whatsapp",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/articles/analyse-audit-performance-votre-site-web",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/optimisationSEO",
				destination: "https://www.creation-site-internet.dev/seo-referencement-naturel",
				permanent: true,
			},
			{
				source: "/createWebsite",
				destination: "https://www.creation-site-internet.dev/web",
				permanent: true,
			},
			{
				source: "/cyberSecurity",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/contenuAndRedaction",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/ecommerce",
				destination: "https://www.creation-site-internet.dev/web",
				permanent: true,
			},
			{
				source: "/emailMarketingAutomatisation",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/articles/creation-site-web/joomla",
				destination: "https://www.creation-site-internet.dev/web",
				permanent: true,
			},
			{
				source: "/articles/accessibilite",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/creation-site-web/site-vitrine",
				destination: "https://www.creation-site-internet.dev/web",
				permanent: true,
			},
			{
				source: "/referencement-seo-google",
				destination: "https://www.creation-site-internet.dev/seo-referencement-naturel",
				permanent: true,
			},
			{
				source: "/articles/reseaux-sociaux/facebook",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/reseaux-sociaux/youtube",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/articles/reseaux-sociaux/instagram",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/_next/static/media/logowww.6e57a025.webp",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/articles/creation-site-web/",
				destination: "https://www.creation-site-internet.dev/web",
				permanent: true,
			},
			{
				source: "/articles/creation-site-web/joomla",
				destination: "https://www.creation-site-internet.dev/web",
				permanent: true,
			},
			{
				source: "/referencement-seo-google",
				destination: "https://www.creation-site-internet.dev/seo-referencement-naturel",
				permanent: true,
			},
			{
				source: "/referencement-seo-google",
				destination: "https://www.creation-site-internet.dev/seo-referencement-naturel",
				permanent: true,
			},
			{
				source: "/reseaux-sociaux/tiktok",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/articles/email-marketing-automatisation",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/creation-site-web/portfolio",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/articles/reseaux-sociaux/linkedin",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/creation-site-web/portail-web",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},

			{
				source: "/articles/creation-site-web",
				destination: "https://www.creation-site-internet.dev/web",
				permanent: true,
			},
			{
				source: "/articles/referencement-seo-google",
				destination: "https://www.creation-site-internet.dev/seo-referencement-naturel",
				permanent: true,
			},
			{
				source: "/articles/reseaux-sociaux",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},

			{
				source: "/faq",
				destination: "https://www.creation-site-internet.dev/web",
				permanent: true,
			},
			{
				source: "/portfolio",
				destination: "https://www.creation-site-internet.dev/stephane-gamot/portfolio",
				permanent: true,
			},
			{
				source: "/blog",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/blog/:path*",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/rating",
				destination: "https://www.creation-site-internet.dev/",
				permanent: true,
			},
			{
				source: "/",
				destination: "https://www.creation-site-internet.dev/",
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

export const MetadataHomePage = {
	"@context": "https://schema.org",
	"@type": "HealthAndBeautyBusiness",
	name: "Massage à domicile",
	image: "https://massage-domicile.com/femme-masse-a-domicile-souriante.webp",
	"@id": "https://massage-domicile.com/",
	url: "https://massage-domicile.com/",
	telephone: "+32477131993",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Octaaf de kerchove d'exaerdestraat 193",
		addressLocality: "Buizingen",
		postalCode: "1501",
		addressCountry: "BE",
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: 50.7460655,
		longitude: 4.2607546,
	},
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			opens: "10:00",
			closes: "20:00",
		},
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: "Saturday",
			opens: "10:00",
			closes: "20:00",
		},
	],
	sameAs: ["https://www.facebook.com/massagedomicilebelgique"],
	priceRange: "$$",
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "Services de massage",
		itemListElement: [
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Massage 'Voyage des Sens' - 2h",
					description:
						"Ce massage doux est une invitation à un voyage intérieur, où chaque toucher est conçu pour éveiller les sens et procurer une sensation de bien-être profond.",
					offers: {
						"@type": "Offer",
						price: "165",
						priceCurrency: "EUR",
					},
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Massage 'Anti-Stress' - 1h30",
					description: "Conçu pour dénouer les noeuds de tension, revitaliser l'esprit fatigué et restaurer l'équilibre intérieur.",
					offers: {
						"@type": "Offer",
						price: "130",
						priceCurrency: "EUR",
					},
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Massage 'Anti-Cellulite' - 1h30",
					description:
						"À la croisée des techniques de drainage et de la stimulation circulatoire, ce massage vise à déloger les dépôts de graisse et tonifier la peau.",
					offers: {
						"@type": "Offer",
						price: "135",
						priceCurrency: "EUR",
					},
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "'Douceur Dorsale' - 1h30 / 2h",
					description: "Une exploration détaillée des points de tension du dos, offrant une libération et une revitalisation de cette zone cruciale.",
					offers: {
						"@type": "Offer",
						price: "130 / 165",
						priceCurrency: "EUR",
					},
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "'Toucher Shiatsu' - 1h30 / 2h",
					description:
						"Basé sur les principes de l'énergie vitale, le Shiatsu vise à rétablir la circulation énergétique optimale et favoriser un bien-être global.",
					offers: {
						"@type": "Offer",
						price: "130 / 165",
						priceCurrency: "EUR",
					},
				},
			},
		],
	},
	review: [
		{
			"@type": "Review",
			reviewRating: {
				"@type": "Rating",
				ratingValue: "5",
				bestRating: "5",
			},
			author: {
				"@type": "Person",
				name: "Stéphane",
			},
		},
	],
};




/*
const MetadataHomePage = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "White Wolf Web",
    "url": "https://www.white-wolf-web.com/",
    "logo": "https://www.white-wolf-web.com/Assets/Favicons/icon-512x512.png",
    "telephone": "+32 477 13 19 93",
    "email": "white-wolf-web@outlook.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Octaaf de kerchove d'exaerdestraat",
      "addressLocality": "Halle",
      "postalCode": "1501",
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.7465",
      "longitude": "4.2563"
    },
    "image": [
      "https://www.white-wolf-web.com/Assets/Images/Jpg/dev-web.jpg",
      "https://www.white-wolf-web.com/Assets/Favicons/icon-512x512.png",
      "https://www.white-wolf-web.com/Assets/Images/Jpg/test-siteweb-www.jpg"
    ],
    "priceRange": "500€ - 10000€",
    "areaServed": ["Belgique", "France", "Luxembourg", "Suisse"],
    "serviceArea": {
      "@type": "AdministrativeArea",
      "name": "Europe"
    },
    "description": "Agence Web spécialisée dans la création de sites web, le SEO et l'audit de sites basée en Belgique.",
    "Service": [
      {
        "@type": "Service",
        "name": "Création de sites web",
        "description": "Agence Web innovante: création de site web, e-commerce, design, accessibilité, référencement SEO et marketing digital afin de propulser votre succès en ligne!🚀💻"
      },
      {
        "@type": "Service",
        "name": "SEO",
        "description": "L'importance d'un référencement naturel efficace afin d&apos;assurer le succès de votre projet en ligne. Le SEO est le nerf de la guerre, les meilleurs l’emportent."
      },
      {
        "@type": "Service",
        "name": "Audit de sites",
        "description": "L'analyse et la performance (un audit) d'un site web vont permettre d’optimiser votre présence en ligne et maximiser le retour sur votre investissement."
      }
    ],
    "openingHours": "Mo,Tu,We,Th,Fr,Sa 09:00-18:00",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=100087896780441",
      "https://twitter.com/whitewo26072430"
    ]
  }
export default  MetadataHomePage;
*/
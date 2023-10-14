import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import youtubeIcon from "@/public/Assets/Icons/youtube-icon.webp";
import facebookIcon from "@/public/Assets/Icons/facebook-icon.webp";
import instagramIcon from "@/public/Assets/Icons/instagram-icon.webp";
import twitterIcon from "@/public/Assets/Icons/twitter-icon.webp";
import whatsappIcon from "@/public/Assets/Icons/whatapp-icon.webp";
import Gsm from "@/public/Assets/Icons/gsm.webp";
import Mail from "@/public/Assets/Icons/mail.webp";
import starIcon from "@/public/Assets/Icons/star-icon.webp";
import VisaCard from "@/public/Assets/Images/Webp/payment/visa.webp";
import MasterCard from "@/public/Assets/Images/Webp/payment/mastercard.webp";
import MaestroCard from "@/public/Assets/Images/Webp/payment/maestrocard.webp";
import Paypal from "@/public/Assets/Images/Webp/payment/paypal.webp";

export default function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.topFooter}>
				<div>
					<h3 className={styles.HFooter}>Agence White Wolf Web</h3>
				</div><Link href="/rating">
				<div className={styles.avis}>
					<h3 className={styles.HFooter}>Avis Clients</h3>&emsp;
					<div className={styles.starContainer}>
						<Image src={starIcon} className={styles.stars} width={21} height={20} alt={"étoile dorée à 5 branches"} title="1er star" />
						<Image src={starIcon} className={styles.stars} width={21} height={20} alt={"étoile dorée à 5 branches"} title="2e star" />
						<Image src={starIcon} className={styles.stars} width={21} height={20} alt={"étoile dorée à 5 branches"} title="3e star" />
						<Image src={starIcon} className={styles.stars} width={21} height={20} alt={"étoile dorée à 5 branches"} title="4e star" />
						<Image src={starIcon} className={styles.stars} width={21} height={20} alt={"étoile dorée à 5 branches"} title="5e star" />
					</div>
				</div></Link>

				<div className={styles.paymentIcons}>
					<Image src={VisaCard} className={styles.paymentCard} width={32} height={20} alt={"Visa Card"} title="Paiement par Carte Visa"  />
					<Image src={MaestroCard} className={styles.paymentCard} width={32} height={20} alt={"Maestro Card"} title="Paiement par Maestro Card"  />
					<Image src={MasterCard} className={styles.paymentCard} width={32} height={20} alt={"Master Card"} title="Paiement par MasterCard"  />
					<Image src={Paypal} className={styles.paymentCard} width={20} height={20} alt={"Paiement par Paypal"} title="Paiement par Paypal" />
				</div>
			</div>
			<div className={styles.middleFooter}>
				<div className={styles.middleLeftFooter}>
					<h3 className={styles.middleLeftFooterH3}>Services Web</h3>
					<ul>
						<li>
							<Link href="/articles/creation-site-web"><strong>Création de site web</strong></Link>
						</li>

						<li>
							<Link href="/articles/referencement-seo-google"><strong>SEO & Référencement</strong></Link>
						</li>
						<li>
							<Link href="/articles/reseaux-sociaux">Réseaux sociaux</Link>
						</li>
						<li>
							<Link href="/articles/miscellaneous/contenu-et-redaction-votre-site-internet">Rédaction web</Link>
						</li>
						<li>
							<Link href="/articles/miscellaneous/analyse-audit-performance-votre-site-web">Analyse des performances</Link>
						</li>
						<li>
							<Link href="/articles/miscellaneous/accessibilite">Accessibilité web</Link>
						</li>
						<li>
							<Link href="/articles/miscellaneous/formation-accompagnement">Support & Accompagnement</Link>
						</li>
					</ul>
				</div>
				<div className={styles.middleCenterFooter}>
				<h3 className={styles.middleLeftFooterH3}>Sites Web</h3>
					<ul>
						<li>
							<Link href="/articles/creation-site-web#site-vitrine"><strong>Site Vitrine</strong></Link>
						</li>
						<li>
							<Link href="/articles/creation-site-web#site-Ecommerce"><strong>Site E-commerce</strong></Link>
						</li>
						<li>
							<Link href="/articles/creation-site-web#siteInformations">Site Institutionnel</Link>
						</li>
						<li>
							<Link href="/articles/creation-site-web#wordpress"><strong>Wordpress</strong></Link>
						</li>
						<li>
							<Link href="/articles/creation-site-web#landingPage"><strong>Landing Page</strong></Link>
						</li>
						<li>
							<Link href="/articles/creation-site-web/#joomla"><strong>Joomla</strong></Link>
						</li>
						<li>
							<Link href="/articles/creation-site-web">Site Web sur Mesure</Link>
						</li>
					</ul>
				</div>
				<div className={styles.middleRightFooter}>
				<h3 className={styles.middleLeftFooterH3}>A propos</h3>
					<ul>
					<li>
							<Link href="/portfolio">Mon Portfolio</Link>
						</li>
						<li>
							<Link href="/faq">FAQ</Link>
						</li>
						<li>
							<Link href="/blog"><strong>Blog</strong></Link>
						</li>
						<li>
							<Link href="/admin/price">Tarifs</Link>
						</li>
						
						<li>
							<Link href="/admin/mention-legale">Mentions Légales</Link>
						</li>
						<li>
							<Link href="/admin/conditions-generales">Conditions Générales</Link>
						</li>
						<li>
							<Link 	href="mailto:white-wolf-web@outlook.com">Contact</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.bottomFooter}>
				<p className={styles.copyright}>&copy; Copyright 2023</p>
				<div className={styles.socialNetwork}>
					<Link href="https://www.facebook.com/people/White-Wolf-Web/100087896780441/" target="_blank" rel="noopener noreferrer" title="Facebook">
						<Image src={facebookIcon} className={`${styles.skills} ${styles.facebook}`} width={40} height={40} alt={"Direction Facebook"}  />
					</Link>
					<Link href="https://www.instagram.com/white_wolf_web/" target="_blank" rel="noopener noreferrer" title="Instagram">
						<Image src={instagramIcon} className={styles.skills} width={40} height={40} alt={"Direction Instagram"} />
					</Link>
					<Link href="https://wa.me/32477131993" target="_blank" rel="noopener noreferrer" title="Whats'app">
						<Image src={whatsappIcon} className={styles.skills} width={40} height={40} alt={"Direction What'App"} />
					</Link>
					<Link href="https://www.youtube.com/channel/UC5ULuDpWVjQslz9yllAOT6w/" target="_blank" rel="noopener noreferrer" title="Youtube">
						<Image src={youtubeIcon} className={styles.skills} width={40} height={40} alt={"Direction Youtube"} />
					</Link>
					<Link href="https://twitter.com/whitewo26072430" target="_blank" rel="noopener noreferrer" title="Twitter">
						<Image src={twitterIcon} className={styles.skills} width={40} height={40} alt={"Direction Twitter"} />
					</Link>
					<div className={styles.coordonnees}>
						<Link href="tel:+32477131993" target="_blank" rel="noopener noreferrer" title="Cliquer & appeler au 0477 13 19 93">
							<Image src={Gsm} className={styles.skills} width={40} height={40} alt={"Cliquer & appeler"} />
						</Link>
						<Link
							href="mailto:white-wolf-web@outlook.com"
							target="_blank"
							rel="noopener noreferrer"
							title="Cliquer & envoyer un Email à white-wolf-web@outlook.com"
						>
							<Image src={Mail} className={styles.skills} width={40} height={40} alt={"Cliquer & Email"} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

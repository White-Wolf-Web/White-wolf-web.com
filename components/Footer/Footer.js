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
					<p>Agence White Wolf Web</p>
				</div><Link href="/rating">
				<div className={styles.avis}>
					<p className={styles.avisTitle}>Avis Clients</p>&emsp;
					<div className={styles.starContainer}>
						<Image src={starIcon} className={styles.stars} width={21} height={20} alt={"1er star icon"} />
						<Image src={starIcon} className={styles.stars} width={21} height={20} alt={"2nd star icon"} />
						<Image src={starIcon} className={styles.stars} width={21} height={20} alt={"3th star icon"} />
						<Image src={starIcon} className={styles.stars} width={21} height={20} alt={"4th star icon"} />
						<Image src={starIcon} className={styles.stars} width={21} height={20} alt={"5th star icon"} />
					</div>
				</div></Link>

				<div className={styles.paymentIcons}>
					<Image src={VisaCard} className={styles.paymentCard} width={32} height={20} alt={"Visa Card"} />
					<Image src={MaestroCard} className={styles.paymentCard} width={32} height={20} alt={"Maestro Card"} />
					<Image src={MasterCard} className={styles.paymentCard} width={32} height={20} alt={"Master Card"} />
					<Image src={Paypal} className={styles.paymentCard} width={20} height={20} alt={"Paypal"} />
				</div>
			</div>
			<div className={styles.middleFooter}>
				<div className={styles.middleLeftFooter}>
					<h2>Services</h2>
					<ul>
						<li>
							<Link href="/articles/creation-site-web">Création de site web</Link>
						</li>

						<li>
							<Link href="/articles/referencement-seo-google">SEO & Référencement</Link>
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
					<h2>Sites Web</h2>
					<ul>
						<li>
							<Link href="/articles/creation-site-web#site-vitrine">Site Vitrine</Link>
						</li>
						<li>
							<Link href="/articles/creation-site-web#site-Ecommerce">Site E-commerce</Link>
						</li>
						<li>
							<Link href="/articles/creation-site-web#siteInformations">Site Institutionnel</Link>
						</li>
						<li>
							<Link href="/articles/creation-site-web#wordpress">Wordpress</Link>
						</li>
						<li>
							<Link href="/articles/creation-site-web#landingPage">Landing Page</Link>
						</li>
						<li>
							<Link href="/articles/creation-site-web/#joomla">Joomla</Link>
						</li>
						<li>
							<Link href="/articles/creation-site-web">Site Web sur Mesure</Link>
						</li>
					</ul>
				</div>
				<div className={styles.middleRightFooter}>
					<h2>A propos</h2>
					<ul>
						<li>
							<Link href="/faq">FAQ</Link>
						</li>
						<li>
							<Link href="/blog">Blog</Link>
						</li>
						<li>
							<Link href="/admin/price">Tarifs</Link>
						</li>
						<li>
							<Link href="/portfolio">Mon Portfolio</Link>
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
						<Image src={facebookIcon} className={`${styles.skills} ${styles.facebook}`} width={40} height={40} alt={"Direction Facebook"} />
					</Link>
					<Link href="https://www.instagram.com/white_wolf_web/" target="_blank" rel="noopener noreferrer" title="Instagram">
						<Image src={instagramIcon} className={styles.skills} width={40} height={40} alt={"Direction Instagram"} />
					</Link>
					<Link href="https://wa.me/32477131993" target="_blank" rel="noopener noreferrer" title="Whats'app">
						<Image src={whatsappIcon} className={styles.skills} width={40} height={40} alt={"Direction What'App pour nous appeler"} />
					</Link>
					<Link href="https://www.youtube.com/channel/UC5ULuDpWVjQslz9yllAOT6w/" target="_blank" rel="noopener noreferrer" title="Youtube">
						<Image src={youtubeIcon} className={styles.skills} width={40} height={40} alt={"Direction Youtube pour regarder nos videos"} />
					</Link>
					<Link href="https://twitter.com/whitewo26072430" target="_blank" rel="noopener noreferrer" title="Twitter">
						<Image src={twitterIcon} className={styles.skills} width={40} height={40} alt={"Direction Twitter pour voir nos tweets"} />
					</Link>
					<div className={styles.coordonnees}>
						<Link href="tel:+32477131993" target="_blank" rel="noopener noreferrer" title="Cliquer pour nous appeler au 0477 13 19 93">
							<Image src={Gsm} className={styles.skills} width={40} height={40} alt={"Cliquer pour nous appeler"} />
						</Link>
						<Link
							href="mailto:white-wolf-web@outlook.com"
							target="_blank"
							rel="noopener noreferrer"
							title="Cliquer pour nous envoyer un Email à white-wolf-web@outlook.com"
						>
							<Image src={Mail} className={styles.skills} width={40} height={40} alt={"Cliquer pour nous envoyer un Email"} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

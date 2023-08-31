import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import htmlIcon from "../../public/Assets/Icons/html5-icon.webp";
import cssIcon from "../../public/Assets/Icons/css3-icon.webp";
import jsIcon from "../../public/Assets/Icons/javascript-icon.webp";
import joomlaIcon from "../../public/Assets/Icons/joomla-icon.webp";
import nextIcon from "../../public/Assets/Icons/next-icon.webp";
import seoIcon from "../../public/Assets/Icons/seo-icon.webp";
import figmaIcon from "../../public/Assets/Icons/figma-icon.webp";
import reactIcon from "../../public/Assets/Icons/react-icon.webp";
import wordpressIcon from "../../public/Assets/Icons/wordpress-icon.webp";
import bootstrapIcon from "../../public/Assets/Icons/bootstrap-icon.webp";
import starIcon from "../../public/Assets/Icons/star-icon.webp";
import youtubeIcon from "../../public/Assets/Icons/youtube-icon.webp";
import facebookIcon from "../../public/Assets/Icons/facebook-icon.webp";
import instagramIcon from "../../public/Assets/Icons/instagram-icon.webp";
import twitterIcon from "../../public/Assets/Icons/twitter-icon.webp";
import whatsappIcon from "../../public/Assets/Icons/whatapp-icon.webp";
import VisaCard from "../../public/Assets/Images/Webp/payment/visa.webp"
import MasterCard from "../../public/Assets/Images/Webp/payment/mastercard.webp"
import MaestroCard from "../../public/Assets/Images/Webp/payment/maestrocard.webp"
import Paypal from "../../public/Assets/Images/Webp/payment/paypal.webp"

export default function Footer() {
	
	return (
		<div className={styles.footer}>
			<div className={`${styles.cell} ${styles.colonne1row1}`}>
				
				
			</div>
			<div className={`${styles.cell} ${styles.colonne2row1}`}>
			
				
			</div>
			<div className={styles.skillsContainer}>
				<h2>Compétences</h2>
				<div className={styles.skillsDiv}>
					<Image src={htmlIcon} className={styles.skills} width={27} height={30} alt={"HTML51"}  />
					<Image src={cssIcon} className={styles.skills} width={27} height={30} alt={"CSS3"} />
					<Image src={jsIcon} className={styles.skills} width={30} height={30} alt={"JavaScript"}  />
					<Image src={reactIcon} className={styles.skills} width={33} height={30} alt={"React"}  />
					<Image src={nextIcon} className={styles.skills} width={30} height={30} alt={"Next.js"}/>
					<Image src={bootstrapIcon} className={styles.skills} width={37} height={30} alt={"Bootstrap"}  />
					<Image src={figmaIcon} className={styles.skills} width={21} height={30} alt={"Figma"}  />
					<Image src={wordpressIcon} className={styles.skills} width={30} height={30} alt={"Wordpress"} />
					<Image src={joomlaIcon} className={styles.skills} width={30} height={30} alt={"Joomla"} />
					<Image src={seoIcon} className={styles.skillsSeo} width={90} height={36} alt={"SEO"}  />
				</div>
			</div>
		
			<div className={styles.clientFeedbackContainer}>
				<h2 className={styles.avisTitle}>Avis Clients</h2>
				<div className={styles.starContainer}>
					<Image src={starIcon} className={styles.stars} width={41} height={40} alt={"1er star icon"} />
					<Image src={starIcon} className={styles.stars} width={41} height={40} alt={"2nd star icon"} />
					<Image src={starIcon} className={styles.stars} width={41} height={40} alt={"3th star icon"} />
					<Image src={starIcon} className={styles.stars} width={41} height={40} alt={"4th star icon"} />
					<Image src={starIcon} className={styles.stars} width={41} height={40} alt={"5th star icon"} />
				</div>
			</div>
			<div className={styles.paymentContainer}>
				<h2 className={styles.paymentTitle}>Paiement</h2>
				<div className={styles.paymentIcons}>
					<Image src={VisaCard} className={styles.paymentCard} width={80} height={50} alt={"Visa Card"} />
					<Image src={MaestroCard} className={styles.paymentCard} width={84} height={50} alt={"Maestro Card"} />
					<Image src={MasterCard} className={styles.paymentCard} width={84} height={50} alt={"Master Card"} />
					<Image src={Paypal} className={styles.paymentCard} width={50} height={50} alt={"Paypal"} />
					
				</div>
			</div>
			
			
			<div className={`${styles.cell} ${styles.colonne3row3}`}></div>
			<div className={styles.socialNetwork}>
			<Link href="https://www.facebook.com/people/White-Wolf-Web/100087896780441/" target="_blank" rel="noopener noreferrer" ><Image src={facebookIcon} className={`${styles.skills} ${styles.facebook}`}width={80} height={80} alt={"Direction Facebook"} placeholder="blur" /></Link>
			<Link href="https://www.instagram.com/white_wolf_web/" target="_blank" rel="noopener noreferrer" ><Image src={instagramIcon} className={styles.skills} width={80} height={80} alt={"Direction Instagram"} placeholder="blur" /></Link>
			<Link href="https://wa.me/32477131993" target="_blank" rel="noopener noreferrer" ><Image src={whatsappIcon} className={styles.skills} width={80} height={80} alt={"Direction What'App pour nous appeler"} placeholder="blur" /></Link>
			<Link href="https://www.youtube.com/channel/UC5ULuDpWVjQslz9yllAOT6w/" target="_blank" rel="noopener noreferrer" ><Image src={youtubeIcon} className={styles.skills} width={80} height={80} alt={"Direction Youtube pour regarder nos videos"} placeholder="blur" /></Link>
			<Link href="https://twitter.com/whitewo26072430" target="_blank" rel="noopener noreferrer" ><Image src={twitterIcon} className={styles.skills} width={80} height={80} alt={"Direction Twitter pour voir nos tweets"} placeholder="blur" /></Link>
			</div>
			<div className={styles.colonneAll}>
				<p>Conditions générales</p>
				<p>&copy; Copyright 2023</p>
				<p>Mentions légales</p>
				<Link href="/admin/politique-confidentialite">Politique de confidentialité </Link>
			</div>
		</div>
	);
}

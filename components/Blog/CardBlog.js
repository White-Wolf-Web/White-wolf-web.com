import styles from "./Blog.module.css";
import Link from "next/link";
import Image from "next/image";

export default function CardBlog({ title, image, description, alt, href, text }) {
	return (
		<div className={styles.cardBlogContainer}>
			<Link href={href}>
				<h2 className={styles.cardBlogTitleH2}>{title}</h2>
				<h3 className={styles.cardBlogTitleH3}>{description}</h3>
				<div className={styles.cardBlogImgAndText} >
				<div className={styles.cardBlogImage} >
				<Image src={image} alt={alt}  quality={100} sizes="100vw" className={styles.cardBlogImageResponsive}  layout="responsive" width={400} height={231} /></div>
			<div className={styles.cardBlogTextAndButton} >	<p className={styles.cardBlogText}>{text}</p>
				<button className={styles.cardBlogBtn}>Voir en Détail</button></div></div>
			</Link>
		</div>
	);
}

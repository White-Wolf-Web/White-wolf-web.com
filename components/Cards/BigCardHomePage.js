import Image from "next/image";
import styles from "./Card.module.css";

const BigCardHomePage = ({ title, titleAlt, text, imgSrc, title2 }) => {
	return (
		<div aria-label={`Lien vers ${titleAlt}`}>
			<div className={`card ${styles.customCard2}`} style={{ width: "18rem" }}>
			
				{imgSrc && <Image src={imgSrc} className="card-img-top" width={200} height={200} alt={titleAlt} title={title2}/>}
				<div className={styles.separateImgTop}></div>
				<div className="card-body">
					<h2 className={styles.cardTitle}>{title}</h2>
					<p className={styles.cardText}>{text}</p>
				</div>
			</div>
		</div>
	);
};

export default BigCardHomePage;

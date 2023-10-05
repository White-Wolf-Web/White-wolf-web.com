import Image from "next/image";
import styles from "./Card.module.css";

const BigCardHomePage = ({ title, titleAlt, text, imgSrc }) => {
	return (
		<div aria-label={`Lien vers ${titleAlt}`}>
			<div className={`card ${styles.customCard2}`} style={{ width: "18rem" }}>
			
				{imgSrc && <Image src={imgSrc} className="card-img-top" width={200} height={200} alt={`${titleAlt}`} />}
				<div className={styles.separateImgTop}></div>
				<div className="card-body">
					<h3 className={styles.cardTitle}>{title}</h3>
					<p className={styles.cardText}>{text}</p>
				</div>
			</div>
		</div>
	);
};

export default BigCardHomePage;

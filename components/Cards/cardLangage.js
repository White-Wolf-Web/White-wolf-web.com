import styles from "./Card.module.css";
import Image from "next/image";
import LangageData from "../../data/langagesData.json";
import Link from "next/link";

function CardLangage({ title, image, description, color, href, backgroundColor }) {
	return (
		<div className={styles.langageCardWrap}>
			
				<div className={styles.langageCardHeader}>
					<Image src={image} alt={title} width={50} height={50} />
				</div>
				<div className={styles.langageCardContent}>
					<h3 className={styles.langageCardTitle}>{title}</h3>
					<p className={styles.langageCardText}>{description}</p>
					<button className={styles.langageCardBtn} style={{ backgroundColor: backgroundColor, color: color }}>
						code
					</button>
				</div>
			
		</div>
	);
}

export function LangageCards() {
	return (
		<div>
			<h2 className={styles.cardHomeH2MarginTop}>Les langages web et Framework utilisés</h2>
			<div className={styles.langageContainerCard}>
				{LangageData.map((langage, index) => {
					return <CardLangage key={index} {...langage} />;
				})}
			</div>
		</div>
	);
}

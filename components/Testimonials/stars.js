import styles from "./testimonials.module.css";
import GoldStar from "@/public/Assets/Icons/star-icon.webp";
import LightGreyStar from "@/public/Assets/Icons/LightGreyStar.png";
import Image from "next/image";

export default function StarRating({ rating }) {
	return (
		<div className={styles.starRating}>
			{Array.from({ length: rating }).map((_, index) => {
				return <Image src={GoldStar} key={index} alt="Etoile d'or en 3d" width={20} height={20} quality={100} className={styles.stars} />;
			})}
			{Array.from({ length: 5 - rating }).map((_, index) => {
				return <Image src={LightGreyStar} key={index} alt="Etoile grise claire" width={20} height={20} quality={100} className={styles.stars} />;
			})}
		</div>
	);
}

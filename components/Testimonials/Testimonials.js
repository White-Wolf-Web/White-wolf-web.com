import styles from "./testimonials.module.css";
import testimonialsData from "@/data/testimonials.json";
import Image from "next/image";
import Stars from "./stars";

export default function Testimonials() {
	return (
		<div className={styles.marginAuto}>
			{testimonialsData.map((testimonial, index) => (
				<div key={index} className={styles.card}>
					<div className={styles.firstrow}>					
						<div>
							<div className={styles.cardTitle}>{testimonial.name}</div> <div className={styles.cardRole}>{testimonial.role}</div>
						</div>
						<Image
							src={testimonial.image}
							alt="Avatar de la personne qui a laissé un commentaire"
							quality={100}
							width={60}
							height={60}
							className={styles.avatar}
						/>
					</div>
					<Stars rating={testimonial.rating} />
					<div className={styles.cardContent}>
						<div>{testimonial.content}</div>
					</div>
				</div>
			))}
		</div>
	);
}

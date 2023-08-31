import styles from "./Card.module.css";

const CardHomePage = ({ title, link }) => {
	return (
		<div className={`card ${styles.customCard}`}>
			<a href={link}>
				<div className="card-body">
					<h3 className="card-title">{title}</h3>
				</div>
			</a>
		</div>
	);
};

export default CardHomePage;

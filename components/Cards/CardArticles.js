import Image from 'next/image';
import styles from "./Card.module.css"
import Link from "next/link";

export default function CardArticles({ title, image, description, href, alt }) {
  return (
    <Link href={href}>
    <div className={styles.cardArt}>
    <Image src={image} alt={alt} width={100} height={100} />
    <div>
    <h2 className={styles.cardArtTitle}>{title}</h2>
    {description.split('\n').map((line, index) => (
              <p key={index} className={styles.cardArtDescription}>{line}</p>
          ))}
  </div></div></Link>
);
};
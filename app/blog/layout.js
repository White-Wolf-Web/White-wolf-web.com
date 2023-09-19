import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import styles from "@/app/page.module.css"
import starIcon from "@/public/Assets/Icons/star-icon.webp";

export default function layout ({ children }) {
  return (
    <div className={styles.blocContainer }>
    <section>
      {children}
    </section>
    <div className={styles.blogLayoutRating} >
        <p>Note:&emsp; </p>
        <div className={styles.starContainer}>
						<Image src={starIcon} className={styles.stars} width={21} height={20} alt={"1er star icon"} />
						<Image src={starIcon} className={styles.stars} width={21} height={20} alt={"2nd star icon"} />
						<Image src={starIcon} className={styles.stars} width={21} height={20} alt={"3th star icon"} />
						<Image src={starIcon} className={styles.stars} width={21} height={20} alt={"4th star icon"} />
						<Image src={starIcon} className={styles.stars} width={21} height={20} alt={"5th star icon"} />
					</div>
      </div>
     {/*  <div>
        <Link href="/">Partager sur Facebook</Link>
        <Link href="/">Partager sur Twitter</Link>
        <Link href="/">Partager sur LinkedIn</Link>
      </div>*/}
    </div>
  )
}

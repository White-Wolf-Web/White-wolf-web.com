import React from 'react'
import Image from 'next/image'
import Moi from "@/public/Assets/Images/Webp/blog/stephaneGamot.webp"
import styles from "./Blog.module.css"

export default function BlogAuthorCard() {
  return (
    <div className={styles.meCard}>
    <p className={styles.meName}>Stéphane Gamot</p>
    <Image src={Moi} alt='Stéphane Gamot' className={styles.mePic} width={36} height={50}/>
    </div>
  )
}

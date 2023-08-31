import React from 'react';
import Link from 'next/link';
import styles from "@/app/page.module.css";

const SeeOtherButton = ({ text, href }) => (
    <div className={styles.moreArticlesButtonContainer}>
        <Link href={href}>
            <button className={styles.moreArticlesButton}>{text}</button>
        </Link>
    </div>
);

export default SeeOtherButton;

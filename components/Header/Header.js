import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Logo from "../../public/Assets/Images/Webp/logo.webp";
import Navbar from "./Navbar";
import Link from "next/link";


export default function Header(props) {
	return (
		<div className={styles.header}>
		<Link href="/">
			<Image src={Logo} alt="Logo de l'agence Web" width={125} height={160} className={styles.logo} placeholder="blur" />
</Link>
			<Navbar />
			{props.children}
		</div>
	);
}

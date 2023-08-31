import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";
import MiniFacebook from "../../public/Assets/Images/Webp/reseaux-sociaux/mini-facebook.webp";
import MiniInstagram from "../../public/Assets/Images/Webp/reseaux-sociaux/mini-instagram.webp";
import MiniLinkedin from "../../public/Assets/Images/Webp/reseaux-sociaux/mini-linkedin.webp";
import Minipinterest from "../../public/Assets/Images/Webp/reseaux-sociaux/mini-pinterest.webp";
import MiniSnapchat from "../../public/Assets/Images/Webp/reseaux-sociaux/mini-snapchat.webp";
import MiniTeams from "../../public/Assets/Images/Webp/reseaux-sociaux/mini-teams.webp";
import MiniTiktok from "../../public/Assets/Images/Webp/reseaux-sociaux/mini-tiktok.webp";
import MiniTwitter from "../../public/Assets/Images/Webp/reseaux-sociaux/mini-twitter.webp";
import MiniWhatsapp from "../../public/Assets/Images/Webp/reseaux-sociaux/mini-whatsapp.webp";
import MiniYoutube from "../../public/Assets/Images/Webp/reseaux-sociaux/mini-youtube.webp";
import MiniDiscord from "../../public/Assets/Images/Webp/reseaux-sociaux/mini-discord.webp";

export default function SocialNetwork() {
	return (
		<div className={styles.socialNetwork}>
			<Link href="/articles/reseaux-sociaux/facebook">
				<Image src={MiniFacebook} width={80} height={80} alt="Mini icon Facebook" />
			</Link>
			<Link href="/articles/reseaux-sociaux/instagram">
				<Image src={MiniInstagram} width={80} height={80} alt="Mini icon Instagram" />
			</Link>
			<Link href="/articles/reseaux-sociaux/linkedin">
				<Image src={MiniLinkedin} width={80} height={80} alt="Mini icon Linkedin" />
			</Link>
			<Link href="/articles/reseaux-sociaux/pinterest">
				<Image src={Minipinterest} width={80} height={80} alt="Mini icon Pinterest" />
			</Link>
			<Link href="/articles/reseaux-sociaux/snapchat">
				<Image src={MiniSnapchat} width={80} height={80} alt="Mini icon Snapchat" />
			</Link>
			<Link href="/articles/reseaux-sociaux/teams">
				<Image src={MiniTeams} width={80} height={80} alt="Mini icon Teams" />
			</Link>
			<Link href="/articles/reseaux-sociaux/tiktok">
				<Image src={MiniTiktok} width={80} height={80} alt="Mini icon Tiktok" />
			</Link>
			<Link href="/articles/reseaux-sociaux/twitter">
				<Image src={MiniTwitter} width={80} height={80} alt="Mini icon Twitter" />
			</Link>
			<Link href="/articles/reseaux-sociaux/whatsapp">
				<Image src={MiniWhatsapp} width={80} height={80} alt="Mini icon What'App" />
			</Link>
			<Link href="/articles/reseaux-sociaux/youtube">
				<Image src={MiniYoutube} width={80} height={80} alt="Mini icon Youtube" />
			</Link>
			<Link href="/articles/reseaux-sociaux/discord">
				<Image src={MiniDiscord} width={80} height={80} alt="Mini icon Discord" />
			</Link>
		</div>
	);
}

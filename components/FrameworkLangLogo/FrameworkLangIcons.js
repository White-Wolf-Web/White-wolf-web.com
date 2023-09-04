import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./FrameworkLangIcons.module.css"
import BootstrapLogo from "../../public/Assets/Icons/bootstrap.webp";
import HtmlLogo from "../../public/Assets/Icons/HTML5.webp"
import CssLogo from "../../public/Assets/Icons/CSS3.webp"
import JSLogo from "../../public/Assets/Icons/javascript-icon.webp";
import ReactLogo from "../../public/Assets/Icons/react-icon.webp";
import NextLogo from "../../public/Assets/Icons/next2.webp";

export default function FrameworkLangIcons() {
	return (
		<div className={style.languagesLogoContainer}>
			<Link href="/articles/languages/bootstrap" >
				<Image src={BootstrapLogo} className={style.languagesIcon} width={126} height={100} alt="Cliquez pour en savoir +++ sur Bootstrap" />
			</Link>
			<Link href="/articles/languages/javascript" >
				<Image src={JSLogo} className={style.languagesIcon} width={100} height={100} alt="Cliquez pour en savoir +++ sur Javascript" />
			</Link>
			<Link href="/articles/languages/html5" >
				<Image src={HtmlLogo} className={style.languagesIcon} width={84} height={100} alt="Cliquez pour en savoir +++ sur HTML" />
			</Link>
			<Link href="/articles/languages/css3" >
				<Image src={CssLogo} className={style.languagesIcon} width={86} height={100} alt="Cliquez pour en savoir +++ sur CSS " />
			</Link>
			<Link href="/articles/languages/react" >
				<Image src={ReactLogo} className={style.languagesIcon} width={112} height={100} alt="Cliquez pour en savoir +++ sur React" />
			</Link>
			<Link href="/articles/languages/next" >
				<Image src={NextLogo} className={style.languagesIcon} width={189} height={100} alt="Cliquez pour en savoir +++ sur Next.js" />
			</Link>
		</div>
	);
}

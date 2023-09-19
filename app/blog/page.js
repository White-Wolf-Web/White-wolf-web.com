import React from "react";
import Head from "next/head";
import styles from "@/app/page.module.css";
//import { v4 as uuidv4 } from "uuid";
import BlogCardData from "@/data/blogCardData";
import CardBlog from "@/components/Blog/CardBlog";

export const metadata = {
	title: "Articles et Guides Experts sur le Développement Web, le SEO et Plus Encore",
	description: "Que vous soyez débutant ou professionnel, vous trouverez ici des ressources, des conseils et des astuces pour parfaire vos compétences en développement web",
	canonical: "https://www.white-wolf-web.com/blog",
};

export default function Blog() {
	return (
		<main className={styles.blogContainer}>
			<h1 className={styles.blogTitle}>Blog pour les Devs</h1>
			<div className={styles.langageContainerCard}>
				{BlogCardData.map((blog, index) => {
					return <CardBlog key={index} title={blog.title} image={blog.image} description={blog.description} alt={blog.alt} href={blog.href} text={blog.text} />;
				})}
			</div>
		</main>
	);
}

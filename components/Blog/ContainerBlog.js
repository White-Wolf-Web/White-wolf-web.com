"use client"
import { useState } from "react";
import CardArticles from "@/components/Cards/CardArticles";
import style from "./Blog.module.css";
import blogsData from "../../data/blogData.json";


export default function ContainerBlog () {
  const [numBlogsToShow, setNumBlogsToShow] = useState(6);

  const showMoreBlogs = () => {
    setNumBlogsToShow(numBlogsToShow + 6);
  };

  const showLessBlogs = () => {
    if (numBlogsToShow > 6) {
      setNumBlogsToShow(numBlogsToShow - 6);
    }
  };

  return (
    <section id="blogLast" className={style.blogSection}>
      <h2 className={style.cardHomeH2Blog}>Le blog</h2>
      <div className={style.blogContainer}>
        {blogsData.slice(0, numBlogsToShow).map((article, index) => (
          <CardArticles key={index} title={article.title} image={article.image} alt={article.alt} description={article.description} href={article.href} />
        ))}
      </div>
      <div className={style.moreArticlesButtonContainer}>
      {blogsData.length > numBlogsToShow && (
        <button className={style.moreArticlesButton} onClick={showMoreBlogs}>Voir +++ de Blog</button>
      )}
      {numBlogsToShow > 6 && (
        <button className={`${style.moreArticlesButton} ${style.showLessCards}`} onClick={showLessBlogs}>Voir --- de blog</button>
      )}</div>
     
    </section>
  );
};

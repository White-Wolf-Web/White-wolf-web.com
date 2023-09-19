import BlogAuthorCard from "@/components/Blog/BlogAuthorCard"
import styles from "./Blog.module.css"

export default function BlogDateAuthorOther({ date }) {
  return (
    <div className={styles.blogDateAuthorOther}>

<p className={styles.meDate}>Publié le : {date}</p>
       <BlogAuthorCard /> 
    </div>
  )
}

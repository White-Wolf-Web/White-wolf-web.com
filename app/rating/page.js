import Testimonials from '@/components/Testimonials/Testimonials'; 
import styles from "@/app/page.module.css"

export const metadata = {
	title: "Les commentaires & avis laissés par nos clients",
	description: "Vous retrouverez ici quelques commentaires que nous ont laissé nos derniers clients suite au travail que nous avons éffectué pour eux",
	canonical: "https://www.white-wolf-web.com/rating",
};

export default function Rating() {
  return (
    <div className={styles.marginAuto}>  <h1>Testimonials</h1>
    <Testimonials /></div>
  )
}


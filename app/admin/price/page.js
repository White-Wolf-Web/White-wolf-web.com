import WolfSection from "@/components/WolfSection/WolfSection"
import styles from "@/app/page.module.css"

export const metadata = {
	title: "Les tarifs proposés pour tous les sites web",
	description: "Vous trouverez les fourchettes de prix pour tous les sites web proposés",
	canonical: "https://www.white-wolf-web.com/admin/price",
};

export default function Price() {
  return (
    <div className={styles.blocContainer}><h1>Tarifs</h1>
<WolfSection />
<p>La création de site internet est au cœur de toute la stratégie d’une entreprise.</p>
<p>C’est une fenêtre qui donne sur le Monde. Une présence sur le web devient aujourd’hui incontournable.</p>
<p>La première fonction d’un site web est de vous faire gagner de l’argent ou du moins ne pas vous en faire perdre.</p>
<br />
<p>Selon les besoins, les fonctionnalités son coût pourrait être conséquent.</p>
<p>Déterminer le prix d’un site internet est complexe, car de nombreux facteurs rentrent en jeu :</p>
<ul>
<li>Le type de site web.</li>
<li>Le nombre de pages du site web</li>
<li>La complexité des fonctionnalités à intégrer (ex : calendrier, réservation & paiement en ligne, …)</li>
<li>La technique utilisée CMS (Wordpress, Joomla, …), code (HTML + CSS + Next.js)</li>
<li>Le design personnalisée ou préexistant</li>
<li>L’architecture</li>
<li>Le type d’hébergement</li>
<li>Le niveau de référencement SEO</li>
<li>L’apport de contenu</li>
<li>L’apport graphique et images</li>
<li>...</li>
</ul>
<br />
<p>Tous les sites sont responsive, niveau accessibilité AA (sauf sur une demande spécifique de votre part), 100% sémantique (structure totalement adapté pour le SEO de Google), 0% BlackHat... </p>
<br />
<table border="1" aria-labelledby="tableTitle">
      <caption id="tableTitle">Tableau des Prix des Prestations</caption>
      <thead>
        <tr>
          <th scope="col" aria-sort="ascending">Prestation</th>
          <th scope="col">Prix minimum</th>
          <th scope="col">Prix moyen</th>
          <th scope="col">Prix Maximum</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Site Vitrine</th>
          <td>700€</td>
          <td>1500€</td>
          <td>+10.000€</td>
        </tr>
        <tr>
          <th scope="row">E-commerce</th>
          <td>1500€</td>
          <td>4000€</td>
          <td>+100.000€</td>
        </tr>
        <tr>
          <th scope="row">Landing Page</th>
          <td>600€</td>
          <td>900€</td>
          <td>4500€</td>
        </tr>
        <tr>
          <th scope="row">Site sur Mesure</th>
          <td>2000€</td>
          <td>7000€</td>
          <td>100.000€</td>
        </tr>
        <tr>
          <th scope="row">Hébergement</th>
          <td>5€ / mois</td>
          <td>50€ / mois</td>
          <td>400€ / mois</td>
        </tr>
        <tr>
          <th scope="row">Maintenance</th>
          <td>40€ / mois</td>
          <td>100€ / mois</td>
          <td>+1000€ / mois</td>
        </tr>
        <tr>
          <th scope="row">Référencement</th>
          <td>150€ / mois</td>
          <td>700€ / mois</td>
          <td>4000€ / mois</td>
        </tr>
        <tr>
          <th scope="row">Marketing Digital</th>
          <td>200€ / mois</td>
          <td>990€ / mois</td>
          <td>8000€ / mois</td>
        </tr>
      </tbody>
</table>

    </div>
  )
}

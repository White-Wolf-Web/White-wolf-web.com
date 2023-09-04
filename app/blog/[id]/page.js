import React from 'react'
import Image from 'next/image'

export default function blogExemple() {
  return (
    <div>
      <h1>{article.title}</h1>
      <span>Publié le : {article.publish_date}</span>
      <div>
        <h2>{article.author.name}</h2>
        <Image src={article.author.image} alt={article.author.name} />
        <p>{article.author.bio}</p>
      </div>
      <div>
        <Image src={article.main_image} alt={article.title} />
      </div>
      <div>
        <p>{article.introduction}</p>
      </div>
      <div>
        {article.content.map((section, index) => (
          <div key={index}>
            <p>{section.paragraph}</p>
            <Image src={section.image} alt={`Section ${index + 1}`} />
          </div>
        ))}
      </div>
      <div>
        <p>{article.conclusion}</p>
      </div>
      <div>
        {article.comments.map((comment, index) => (
          <div key={index}>
            <span>{comment.user}: </span>
            <span>{comment.comment}</span>
          </div>
        ))}
      </div>
      <div>
        <span>Rating: {article.rating}</span>
      </div>
      <div>
        <a href={article.social_share.facebook}>Partager sur Facebook</a>
        <a href={article.social_share.twitter}>Partager sur Twitter</a>
        <a href={article.social_share.linkedin}>Partager sur LinkedIn</a>
      </div>
    </div> 
  )
}




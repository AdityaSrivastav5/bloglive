import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'


const  Featured= async()=> {

  return (
    <div className={styles.container}>
    <div className={styles.title}>
      <h1>
        <b>Hello Tushar here! </b>
         Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        
      <div className={styles.imagecontainer}>
        <Image src="/Cat2.jpg" alt=" " height={430} width={450} />
      </div>
      <div className={styles.textcontainer}>
        <h1 className={styles.posttitle}>Welcome to Your Blogging Destination: Share Your Ideas and Stories Here!.</h1>
        <p className={styles.descrip}>
        Here at our blogging platform, you have the opportunity to share your thoughts, experiences, and ideas with the world. Whether you're a seasoned writer or just getting started, our platform welcomes your creativity. Share your insights, tell your stories, and engage with a community of like-minded individuals. Start your blogging journey with us today.
        </p>
        <button className={styles.button}>Readmore</button>
      </div>
      </div>
       
        </div>
        </div>
  )
}

export default Featured
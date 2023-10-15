import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./menupost.module.css"

const Menupost = ({withimage}) => {
  return (
    <div className={styles.items}>
    <Link href="/" className={styles.item}>
     {withimage && <div className={styles.imagecontainer}>
        <Image
          src="/p1.jpeg"
          alt=""
          className={styles.image}
          fill
        />
      </div>}
      <div className={styles.textcontainer}>
        <span className={`${styles.category} ${styles.travel}`}>
          Travel
        </span>
        <h3 className={styles.posttitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <div className={styles.detail}>
          <span className={styles.name}>Tushar gupta </span>
          <span className={styles.date}>10.03.12</span>
        </div>
      </div>
    </Link>
    {/* ------------------------------------------------ */}
    
    <Link href="/" className={styles.item}>
    {withimage &&  <div className={styles.imagecontainer}>
        <Image
          src="/p1.jpeg"
          alt=""
          className={styles.image}
          fill
        />
      </div>}
      <div className={styles.textcontainer}>
        <span className={`${styles.category} ${styles.culture}`}>
          culture
        </span>
        <h3 className={styles.posttitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <div className={styles.detail}>
          <span className={styles.name}>Tushar gupta </span>
          <span className={styles.date}>10.03.12</span>
        </div>
      </div>
    </Link>
     {/* ------------------------------------------------ */}
    {/* ------------------------------------------------ */}
    
    <Link href="/" className={styles.item}>
      {withimage &&  <div className={styles.imagecontainer}>
        <Image
          src="/p1.jpeg"
          alt=""
          className={styles.image}
          fill
        />
      </div> }
      <div className={styles.textcontainer}>
        <span className={`${styles.category} ${styles.food}`}>
          Food
        </span>
        <h3 className={styles.posttitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <div className={styles.detail}>
          <span className={styles.name}>Tushar gupta </span>
          <span className={styles.date}>10.03.12</span>
        </div>
      </div>
    </Link>
   
    
    <Link href="/" className={styles.item}>
      {withimage &&  <div className={styles.imagecontainer}>
        <Image
          src="/p1.jpeg"
          alt=""
          className={styles.image}
          fill
        />
      </div> }
      <div className={styles.textcontainer}>
        <span className={`${styles.category} ${styles.fashion}`}>
          Fashion
        </span>
        <h3 className={styles.posttitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <div className={styles.detail}>
          <span className={styles.name}>Tushar gupta </span>
          <span className={styles.date}>10.03.12</span>
        </div>
      </div>
    </Link>
     {/* ------------------------------------------------ */}
  </div>
  )
}

export default Menupost
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/Cat2.jpg" alt="lama blog" width={50} height={50} className={styles.image} />
          <h1 className={styles.logoText}>Tushar Gupta</h1>
        </div>
        <p className={styles.desc}>
        HOPE YOU LIKE IT ❤️🚀
        </p>
        <div className={styles.icons}>
        <Link href="https://www.facebook.com/profile.php?id=100017899686085">
        <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
        </Link>
        <Link href="https://www.instagram.com/tushuoye/">
        <Image src="/instagram.png" alt="facebook" width={24} height={24}/>
        </Link>
        <Link href="https://www.youtube.com/channel/UCZG6kAjr0ioBNdFjAOF_PbA">
        <Image src="/youtube.png" alt="facebook" width={24} height={24}/>
        </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          {/* <Link href="/">Blog</Link> */}
          {/* <Link href="/">About</Link> */}
          <Link href="https://www.instagram.com/tushuoye/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/style">Style</Link>
          <Link href="/fashion">Fashion</Link>
          <Link href="/coding">Coding</Link>
          <Link href="/travel">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://www.facebook.com/profile.php?id=100017899686085">Facebook</Link>
          <Link href="https://www.instagram.com/tushuoye/">Instagram</Link>
          {/* <Link href="/">Tiktok</Link> */}
          <Link href="https://www.youtube.com/channel/UCZG6kAjr0ioBNdFjAOF_PbA">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
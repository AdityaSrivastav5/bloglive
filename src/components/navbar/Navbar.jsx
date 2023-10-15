"use client"
import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import Themetoggel from '../themetoggel/Themetoggel'
import Authlink from '../authlinks/Authlink'
import { useRouter } from 'next/navigation'
function Navbar() {
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push("/")
  }
  return (
    <div className={styles.container}>
      
      <div className={styles.socials}>
        <Link   style={{ textDecoration: 'none' }} href="https://www.facebook.com/profile.php?id=100017899686085">
        <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
        </Link>
        <Link  style={{ textDecoration: 'none' }} href="https://www.instagram.com/tushuoye/">
        <Image src="/instagram.png" alt="facebook" width={24} height={24}/>
        </Link>
        <Link  style={{ textDecoration: 'none' }} href="https://www.youtube.com/channel/UCZG6kAjr0ioBNdFjAOF_PbA">
        <Image src="/youtube.png" alt="facebook" width={24} height={24}/>
        </Link>
        {/* <Image src="/tiktok.png" alt="facebook" width={24} height={24}/> */}
      </div>

      <div onClick={handleClick} className={styles.logo} >
        Trustblog
      </div>

      
      <div className={styles.links}>
        <Themetoggel/>
        <Link  className={styles.link} href="/">Homepage</Link>
        <Link className={styles.link} href="https://www.instagram.com/tushuoye/">Contact</Link>
        {/* <Link className={styles.link} href="/">About</Link> */}
        <Authlink/>
      </div>
    
    </div>
  )
}

export default Navbar
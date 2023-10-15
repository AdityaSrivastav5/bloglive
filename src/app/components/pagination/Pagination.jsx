"use client"
import React from 'react'
import styles from "./pagination.module.css"
import { useRouter } from 'next/navigation'

function Pagination({page  , hasprev , hasnext}) {
  const router = useRouter();
  return (
    <div className={styles.container}>
       <button className={styles.btn} onClick={()=>{router.push(`?page=${page-1}`)}} disabled={!hasprev} >Previous</button>
       <button  className={styles.btn} onClick={()=>{router.push(`?page=${page+1}`)}} disabled={!hasnext} >Next</button>
        </div>
  )
}

export default Pagination
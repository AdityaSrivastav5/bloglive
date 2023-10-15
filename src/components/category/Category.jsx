import React from "react";
import styles from "./category.module.css";
import Link from "next/link";
import Image from "next/image";
const getdata=async()=>{

  const res = await fetch (`${process.env.NEXTAUTH_URL}/api/categories` , {
    cache:"no-store"
  })
  if(!res.ok){
    throw new Error("Failed")
  }
  return res.json()

}
const Category =async()=> {
  const data = await getdata();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((items=>(
 <Link
 key={items._id}
 href="/blog?cat=styles"
 className={`${styles.category} ${styles[items.slug]}`}
>
{items.img && <Image
   src={items.img}
   alt=""
   width={32}
   height={32}
   className={styles.image}
 />}
 {items.title}
</Link>
        )))}
        
      </div>
    </div>
  );
}

export default Category;

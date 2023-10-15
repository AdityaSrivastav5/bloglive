import React from "react";
import styles from "./cardlist.module.css";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";


const getdata = async (page , cat) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts?page=${page}&cat=${cat||""}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const Cardlist = async ({ page , cat }) => {
  const {posts , count} = await getdata(page , cat);
  // console.log(posts, count);
  
  const POST_PER_PAGE = 2;

  const hasprev = POST_PER_PAGE * (page-1) >0 ;
  const hasnext = POST_PER_PAGE*(page-1)+POST_PER_PAGE <count;

  return (
    <div className={styles.container}>
      <div className={styles.title}>Recent Posts</div>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasnext={hasnext} hasprev={hasprev}/>
    </div>
  );
};

export default Cardlist;

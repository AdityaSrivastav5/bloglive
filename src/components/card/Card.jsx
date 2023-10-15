
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = ({key , item}) => {
  // console.log(item)
  return (
    <div className={styles.container} key={key}>
      {item.img && <div className={styles.imagecontainer}>
        <Image className={styles.image} src={item.img} alt="" fill /> 
      </div>}
      <div className={styles.textcontainer}>
        <div className={styles.details}>
          <span className={styles.date}>{item.createdAt.substring(0,10)} -{" "} </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
          </Link>
          {/* <p className={styles.desc}>{item.desc.substring(0,60)}
          </p> */}

          <div
          className={styles.desc}
      dangerouslySetInnerHTML={{__html: item.desc.substring(0,60)}}
    />
        
        <Link className={styles.linkme} href={`/posts/${item.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;

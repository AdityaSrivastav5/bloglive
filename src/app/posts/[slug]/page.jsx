
import Comment from "@/components/comment/Comment";
import styles from "./singlepage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";

const getdata = async (slug) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}?popular=true`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};


const Singlepage = async({params}) => {

  const {slug} = params;

  const data = await getdata(slug);
  // console.log(data)
  return (
    <div className={styles.container}>
    <div className={styles.infoContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{data?.title}</h1>
        <div className={styles.user}>
          {data?.user?.image && (
            <div className={styles.userImageContainer}>
              <Image src={data.user?.image} alt="" fill className={styles.avatar} />
            </div>
          )}
          <div className={styles.userTextContainer}>
            <span className={styles.username}>{data?.user?.name}</span>
            <span className={styles.date}>01.01.2024</span>
          </div>
        </div>
      </div>
      {data?.img && (
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill className={styles.image} />
        </div>
      )}
    </div>
    <div className={styles.content}>
      <div className={styles.post}>
        <div
          className={styles.description}
         
        >
          {
            data?.desc
          }
        </div>
        <div className={styles.comment}>
          <Comment  postSlug={slug}/>
        </div>
      </div>
      <Menu />
    </div>
  </div>);
};

export default Singlepage;

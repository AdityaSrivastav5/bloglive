
import Cardlist from "@/components/cardlist/Cardlist";
import styles from "./blogpage.module.css"
import Menu from "@/components/menu/Menu";

const Blog = ({searchParams}) => {
  const page = parseInt(searchParams)||1;
  const {cat} = searchParams;
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            {cat}
        </div>
        <div className={styles.content}>
            <Cardlist page={page} cat={cat}/>
            <Menu/>
        </div>

    </div>
  )
}

export default Blog
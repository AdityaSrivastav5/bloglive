import Cardlist from "./components/cardlist/Cardlist";
import Category from "./components/category/Category";
import Featured from "./components/featured/Featured";
import Menu from "./components/menu/Menu";
import styles from "./homepage.module.css";

export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1;
  return <div className={styles.container}>
    <Featured/>
    <Category/>
    <div className={styles.content}>
      <Cardlist page={page}/>
      <Menu/>
    </div>




  </div>;
}

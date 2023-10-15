import React from "react";
import styles from "./menu.module.css";
import Image from "next/image";
import Link from "next/link";
import Menupost from "../menupost/Menupost";
import Menucategory from "../menucategory/Menucategory";

function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular </h1>
      <Menupost />
      {/* -------------------------------- */}
      
      
      <h2 className={styles.subtitle}> Discover by Topic</h2>
      <h1 className={styles.title}> Category </h1>
      <Menucategory/>

      {/*  ------------------------ */}
      {/* <h2 className={styles.subtitle}>Choosen by the editor</h2>
      <h1 className={styles.title}>Editor's Pick </h1>
      <Menupost withimage={true} /> */}
    </div>
  );
}

export default Menu;

"use client"
import React from "react";
import styles from "./login.module.css";
import { signIn , useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const {data , status} = useSession()
  console.log(data , status)
  const router = useRouter()
  if(status == "loading"){
<h1>loading...</h1>

  }
  if(status=="authenticated"){
router.push("/")
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialbtn} onClick={(e)=>signIn("google")
        }>Google</div>
        {/* <div className={styles.socialbtn}>Github</div>
        <div className={styles.socialbtn}>Facebook</div> */}
      </div>
    </div>
  );
};

export default Login;

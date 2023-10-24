"use client"
import styles from "./page.module.css"
import { useRouter } from "next/navigation"
export default function NotFound () {
    const router = useRouter();
    return (
        <div className={styles.main} style={{justifyContent: "center"}}>
            <h1 style={{fontSize: "300px"}}>404</h1>
            <h2>Page not found</h2>
            <button style={{margin: "1rem", padding: "10px 20px", fontSize: "20px", fontWeight: "700"}} onClick={()=> router.push("/")}>Go to Home</button>
        </div>
    )
}
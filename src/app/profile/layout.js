"use client"
import Link from "next/link"

export default function ProfileNav({children}){
    return(
        <div>        
            <nav style={{display: "flex", width: "100%", justifyContent: "space-around", padding: "1rem"}}>
                <Link href="/profile/admin">Admin</Link>
                <Link href="/profile/user">User</Link>
            </nav>
            {children}
        </div>
    )
}
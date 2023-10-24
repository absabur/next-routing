"use client"
import Link from 'next/link'
import styles from '../page.module.css'
export default function Profile() {
  return (
    <div className={styles.main}>
      <h1>This is Profile page</h1>
      <Link href="/profile/details/posts/post/content">Multiple nested route / segment route</Link>
    </div>
  )
}

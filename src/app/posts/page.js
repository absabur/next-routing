"use client"
import Link from 'next/link';
import styles from '../page.module.css'
import { useEffect, useState } from 'react';
export default function Posts() {
  const [Posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setPosts(json))
  }, [])
  
  return (
    <div className={styles.main}>
      <h1>This is Posts page</h1>
      {
        Posts.map((item, index)=> (
          <Link key={index} href={`/posts/${item.id}`}>
            <div style={{backgroundColor: "white",width: "350px", color: "black", padding: "10px", margin: "20px"}}>
              <h2>({item.id}) {item.title}</h2>
            </div>
          </Link>
        ))
      }
    </div>
  )
}
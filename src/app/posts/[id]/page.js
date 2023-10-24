"use client"
import { useEffect, useState } from 'react'
import styles from '../../page.module.css'

export default function Post({params}) {
  const [Post, setPost] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setPost(json))
  }, [])
  return (
    <div className={styles.main}>
      <h1>This is Post page</h1>
      {
        Post.map((item, index)=> (
        <div key={index}>
        {
            item.id === Number(params.id) ? 
            <div style={{backgroundColor: "white", color: "black", padding: "10px", margin: "20px"}}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </div>
            : null
        }
        </div>
        ))
      }
    </div>
  )
}
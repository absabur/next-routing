"use client"
import styles from '../../page.module.css'
export default function SegmentRoute({params}) {
    console.log(params);
  return (
    <div className={styles.main}>
      <h1>segment route</h1>
      {
        params.profile.map((item, index)=> (
            <h2 key={index}>route ({index+1}): {item}</h2>
        ))
      }
    </div>
  )
}

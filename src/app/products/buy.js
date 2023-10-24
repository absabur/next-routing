"use client"

import { useRouter } from "next/navigation"

function Buy({id}) {
  const router = useRouter()
  return (
  <>
    <style>
      {`
        button{
          color: aqua;
          padding: 5px;
          font-size: 17px;
          background-color: transparent;
          border: 1px solid white;
        }  
    `}
    </style>
    <button style={{cursor: "pointer"}} onClick={()=> router.push(`/products/${id}`)}>See Full</button>
  </>
  )
}

export default Buy
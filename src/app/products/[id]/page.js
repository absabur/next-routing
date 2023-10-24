import styles from '../../page.module.css'
import Image from 'next/image'

async function productList() {
  let data = await fetch(`https://dummyjson.com/products`);
  data = await data.json();
  return data.products;
}

export default async function Product({params}) {
  const Product = await productList()
  let item = Product[Number(params.id)-1]
  return (
    <div className={styles.main}>
      <h1>This is Product page</h1>
        <div style={{gap: "20px",boxShadow: "0 0 10px white", padding: "20px", margin: "20px", display: "flex", flexDirection:"column", alignItems: "center"}}>
          <div style={{display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "center"}}>
              {
                  item.images && item.images.map((item, index)=> (
                      <Image key={index} src={item} width={200} height={150} style={{objectFit: "contain", margin: "10px"}}/>
                  ))
              }
          </div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <h3>Price: <del style={{opacity: "0.6"}}>${item.price}</del> (${parseInt(item.price - (item.price * item.discountPercentage/100))}) <span style={{fontSize:"15px", opacity:"0.5", fontWeight: "400"}}>- {item.discountPercentage}% less</span></h3>
          <b>Stock: {item.stock}, rating: {item.rating}</b>
          <strong>Brand: {item.brand}, Category: {item.category}</strong>
      </div>
    </div>
  )
}

export async function generateMetadata({params}) {
  const Products = await productList()
  const product = Products[Number(params.id)-1]
  let metaData = {
    title: product.title,
    description: product.description,
  }

  return {
    title: metaData.title,
    description: metaData.description
  }
}
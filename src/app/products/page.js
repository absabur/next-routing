import { Fontdiner_Swanky } from "next/font/google";
const FontdinerSwanky = Fontdiner_Swanky({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})
import styles from "../page.module.css";
import Buy from "./buy";

async function productList() {
  let data = await fetch(`https://dummyjson.com/products`);
  data = await data.json();
  return data.products;
}

export default async function Products() {
    let data = await productList();
  return (
    <div className={styles.main} style={{width: "100%", padding: "0"}}>
      <h1>Products</h1>
      <div style={{margin: "0", padding: "0", width: "100%", display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "center"}}>
      {
        data.map((item, index) => (
            <div style={{ width: "200px", backgroundColor: "black", boxShadow: "0 0 10px white", margin: "1rem", padding: "10px", height: "300px", display: "flex", justifyContent: "space-between", flexDirection: "column"}} key={index}>
                <img src={item.thumbnail} width={140} height={100} style={{objectFit: "contain", alignSelf: "center"}}/>
                <h3 className={FontdinerSwanky.className} style={{textAlign: "center"}}>Name: {item.title.slice(0, 15)}{item.title.slice(16, Infinity)? "...": null}</h3>
                <p>{item.description.slice(0, 30)}...</p>
                <h4>Price: <del style={{opacity: "0.6"}}>${item.price}</del> (${parseInt(item.price - (item.price * item.discountPercentage/100))})</h4>
                <div>stock: {item.stock}, rating: {item.rating}</div>
                <Buy id={item.id}/>
            </div>
        ))
      }
      </div>
    </div>
  );
}


export function generateMetadata({patams}) {
  return {
    title: "Products"
  }
}

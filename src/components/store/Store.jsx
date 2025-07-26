import { useState, useEffect } from "react";
import styles from "./Store.module.css";
import FetchProducts from "../../hooks/useFetchProducts.js";
import NavBar from "../navbar/NavBar.jsx";
import Basket from "../basket/Basket.jsx";
import ProductCard from "../product/ProductCard.jsx";

const Store = () => {
  const { productsList, error, loading } = FetchProducts();
  const [basket, addToBasket] = useState([]);
  const [subTotal, addToSubTotal] = useState(0.0);

  function AddToBasket(product, qty = 1) {
    product.qty = qty;
    addToBasket([...basket, product]);
    const price = product.price * qty;
    let total = Math.round((subTotal + price + Number.EPSILON) * 100) / 100;
    addToSubTotal(total);
  }

  useEffect(() => {
    console.log(basket);
  }, [basket]);

  if (loading)
    return (
      <>
        <NavBar></NavBar>
        <div className={styles.container}>
          <h1>THIS IS THE STORE</h1>
          <p>Loading...</p>
        </div>
      </>
    );
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <NavBar></NavBar>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.cardWrapper}>
            {productsList.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToBasket={AddToBasket}
              ></ProductCard>
            ))}
          </div>
          <Basket
            className={styles.basket}
            basketList={basket}
            subTotal={subTotal}
          ></Basket>
        </div>
      </div>
    </>
  );
};

export default Store;

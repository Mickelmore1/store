import styles from "./ProductCard.module.css";
import { useState } from "react";

function ProductCard({ product, addToBasket }) {
  const [inputValue, setInputValue] = useState(1);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.card}>
      <img className={styles.image} src={product.image}></img>
      <h1 className={styles.title}>{product.title}</h1>
      <h2 className={styles.price}>{product.price}</h2>
      <input
        type="number"
        value={inputValue}
        min="1"
        max="10"
        onChange={handleInputChange}
      ></input>
      <button type="submit" onClick={() => addToBasket(product, inputValue)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

import styles from "./ProductCard.module.css";

function ProductCard({ product, addToBasket }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={product.image}></img>
      <h1 className={styles.title}>{product.title}</h1>
      <h2 className={styles.price}>{product.price}</h2>
      <input type="number" placeholder="0" min="0" max="10"></input>
      <button type="submit" onClick={() => addToBasket(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

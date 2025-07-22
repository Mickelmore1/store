import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={product.image}></img>
      <h1 className={styles.title}>{product.title}</h1>
      <h2 className={styles.price}>{product.price}</h2>
      <h3 className={styles.description}>{product.description}</h3>
    </div>
  );
}

export default ProductCard;

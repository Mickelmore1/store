import styles from "./Basket.module.css";

function Basket({ basketList, subTotal }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Subtotal: £{subTotal}</h1>
      {basketList.map((product) => (
        <>
          <h3>{product.title}</h3>
          <h4>{product.qty}</h4>
        </>
      ))}
      <button>Checkout</button>
    </div>
  );
}

export default Basket;

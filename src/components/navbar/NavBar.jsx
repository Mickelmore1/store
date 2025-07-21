import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.container}>
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
      <Link to="/basket">Checkout</Link>
    </div>
  );
}

export default NavBar;

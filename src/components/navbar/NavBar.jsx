import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.container}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/store">
        Store
      </Link>
    </div>
  );
}

export default NavBar;

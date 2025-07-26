import styles from "./App.module.css";
import NavBar from "./components/navbar/NavBar.jsx";
import video1 from "./assets/splashscreen.mp4";

const App = () => {
  return (
    <>
      <NavBar style={styles.nav}></NavBar>
      <div>
        <video width={"100%"} autoPlay muted loop>
          <source src={video1} type="video/mp4"></source>
          Your browser does not support this video.
        </video>
      </div>
    </>
  );
};

export default App;

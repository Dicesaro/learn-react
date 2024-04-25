import styles from "./App.module.css";
import { useState } from "react";
import { Users } from "../Users/Users";

const App = ({ value }) => {
  // const [contador, setContador] = useState(value);

  // const handlePlus = () => setContador(contador + 1);
  // const handleMinus = () => setContador(contador - 1);

  return (
    <>
      {/* <section className={styles.timing}>
        <h1>Mi contador hecho con React:</h1>
        <p>{contador}</p>
        <div className={styles.buttons}>
          <button onClick={handlePlus}>+1</button>
          <button onClick={handleMinus}>- 1</button>
        </div>
      </section> */}
      <Users />
    </>
  );
};

export default App;

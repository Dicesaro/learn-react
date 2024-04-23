import { useState } from "react";
import "../../css/normalice.css";
import "./App.css";

const App = ({ value }) => {
  const [contador, setContador] = useState(value);

  const handlePlus = () => setContador(contador + 1);
  const handleMinus = () => setContador(contador - 1);

  return (
    <>
      <section>
        <h1>Mi contador hecho con React:</h1>
        <p>{contador}</p>
        <div className="buttons">
          <button onClick={handlePlus}>+1</button>
          <button onClick={handleMinus}>- 1</button>
        </div>
      </section>
    </>
  );
};

export default App;

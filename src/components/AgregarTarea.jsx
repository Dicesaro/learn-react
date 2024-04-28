import { useState } from "react";

const AgregarTarea = ({ agregarTarea }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const onSubmit = (event) => {
    const envio = {
      nombre: inputValue,
      visto: false,
    };
    event.preventDefault();
    agregarTarea((tareas) => [...tareas, envio]);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          className="mx-20"
          type="text"
          placeholder="Agregar Tarea"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};

export default AgregarTarea;

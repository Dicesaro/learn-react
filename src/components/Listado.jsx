import { useState } from "react";
import "../../src/output.css";
import AgregarTarea from "./AgregarTarea";

const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto && "✅"}
    </li>
  );
};
const Listado = () => {
  let listadoSecciones = [
    { nombre: "HTML", visto: false },
    { nombre: "CSS", visto: true },
    { nombre: "JS", visto: false },
    { nombre: "GIT", visto: true },
    { nombre: "GITHUB", visto: false },
    { nombre: "TERMINAL", visto: true },
    { nombre: "JSX", visto: false },
    { nombre: "TAILWIND", visto: true },
  ];
  const [arreglo, setArreglo] = useState(listadoSecciones);

  return (
    <>
      <h1 className="font-bold text-3xl px-20 py-10">Listado de Temas</h1>
      <AgregarTarea agregarTarea={setArreglo} />
      <ol className="font-medium text-4xl p-20 ">
        {arreglo.map((item) => (
          <Items key={item.nombre} nombre={item.nombre} visto={item.visto} />
        ))}
      </ol>
    </>
  );
};

export default Listado;

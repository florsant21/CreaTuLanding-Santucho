import { useState } from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [valor, setValor] = useState(0);

  console.log("se renderiza el app");

  return (
    <>
      <NavBar valor={valor} />

      <img src="/vite.svg" />
      <ItemListContainer
        mensaje="Haz clic para agregar al carrito."
        fn={setValor}
      />
    </>
  );
}

export default App;

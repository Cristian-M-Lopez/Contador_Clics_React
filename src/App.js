import "./App.css";
import freeCodeCampLogo from "./images/fcc_logo.png";
import Boton from "./components/boton";
import Contador from "./components/contador";
import { useState } from "react";

function App() {
  const [numClics, setContador] = useState(0);

  const manejarClic = () => {
    setContador(numClics + 1);
  };

  const reiniciarContador = () => {
    setContador(0);
  };

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img src={freeCodeCampLogo} className="freecodecamp-logo" alt="logo" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;

import React, { useContext } from "react";
import { Link } from "react-router-dom"; 

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { ContextGlobal } from "./utils/global.context"; 

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal); 

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div>
        <Link to="/home">Home</Link>
        <Link to="/contacto">Contact</Link>
        <Link to="/favs">Favs</Link>
      </div>
      <button onClick={toggleTheme}>
        {" "}
        {theme === "light" ? "Switch to Dark" : "Switch to Light"}
      </button>
    </nav>
  );
};

export default Navbar;

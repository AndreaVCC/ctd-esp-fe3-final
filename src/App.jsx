import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ContextProvider, ContextGlobal } from "./Components/utils/global.context"; 
import { useContext } from "react";

const AppContent = () => {
  const { theme } = useContext(ContextGlobal); 

  return (
    <div className={`App ${theme === "dark" ? "dark" : "light"}`}> 
      <Router>
        <Navbar />
        <Routes className="mai">
          <Route path="/home" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} /> 
          <Route path="/favs" element={<Favs />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

const App = () => {
  return (
    <ContextProvider> 
      <AppContent />
    </ContextProvider>
  );
};

export default App;

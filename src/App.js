/*Codigo principal de la aplicacion lo que apareze aqui es lo que se renderiza en el vdom y luego en el dom*/
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sobre from "./pages/Sobre";
import Votar from "./pages/Votar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return(
    <>
      <Navbar />
        <div className="container">
          <Routes>
            <Route path="/votar" element={<Votar />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      <Footer content="Derechos de autor © 2025. Lancia Awards"/>
    </>
  )
}

export default App;

/*Codigo principal de la aplicacion lo que apareze aqui es lo que se renderiza en el vdom y luego en el dom*/
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sobre from "./pages/Sobre";
import Votar from "./pages/Votar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Thanks from "./pages/Thanks";
import { signOut } from "firebase/auth";
import { auth } from "./FireBaseConfig";

function App() {
  window.addEventListener("beforeunload", (ev) => {
    ev.preventDefault();
    signOut(auth)
  });

  return(
    <>
    <div className="page-contaniner">
      <Navbar />
      <div className="container">
         <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/votar" element={<Votar />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/gracias" element={<Thanks />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer content="Derechos de autor © 2024. Lancia Awards"/>
    </div>
    </>
  )
}

export default App;
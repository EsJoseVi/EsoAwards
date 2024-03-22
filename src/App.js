import Navbar from "./components/Navbar";
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
    </>
  )
}

export default App;

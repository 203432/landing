import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Formulario from "./pages/Formulario";
import Mapa from "./pages/Mapa";
import Menu from "./pages/Menu";
import PaginaPrincipal from "./pages/PaginaPrincipal";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/form" element={<Formulario />} />
        <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

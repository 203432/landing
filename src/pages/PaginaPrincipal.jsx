import Seccion1 from "../Components/seccion1";
import "../App.css";
import Seccion2 from "../Components/seccion2";
import Foot from "../Components/foot";
import Seccion3 from "../Components/seccion3";

function PaginaPrincipal() {
  return (
    <div className="PaginaPrincipal">
      <Seccion1 />
      <Seccion2 />
      <Seccion3 />
      <Foot />
    </div>
  );
}

export default PaginaPrincipal;
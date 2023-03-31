import "../App.css";
import lasagna from "../assets/lasagnaitem.png";
import pizza from "../assets/pizza.png";
import pasta from "../assets/pasta.png";
import ravioli from "../assets/ravioli.png";

export const Seccion2 = () => {
  return (
    <div className="seccion-2">
      <div className="header-s2">Nuestros Productos insignias</div>
      <div className="fondoItems">
        <div className="imagen">
          <img className="item" src={lasagna} alt="logo" />
          <div className="info">
            <h3>Nombre del plato</h3>
            <p>Precio: $XX.XX</p>
          </div>
        </div>
        <div className="imagen">
          <img className="item" src={pizza} alt="logo" />
          <div className="info">
            <h3>Nombre del plato</h3>
            <p>Precio: $XX.XX</p>
          </div>
        </div>
        <div className="imagen">
          <img className="item" src={pasta} alt="logo" />
          <div className="info">
            <h3>Nombre del plato</h3>
            <p>Precio: $XX.XX</p>
          </div>
        </div>
        <div className="imagen">
          <img className="item" src={ravioli} alt="logo" />
          <div className="info">
            <h3>Nombre del plato</h3>
            <p>Precio: $XX.XX</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Seccion2;

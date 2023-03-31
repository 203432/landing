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
            <h3>Lasaña</h3>
            <p>Precio: $200.00</p>
          </div>
        </div>
        <div className="imagen">
          <img className="item" src={pizza} alt="logo" />
          <div className="info">
            <h3>Pizza de la casa</h3>
            <p>Precio: $250.00</p>
          </div>
        </div>
        <div className="imagen">
          <img className="item" src={pasta} alt="logo" />
          <div className="info">
            <h3>spaguetti a la bolignesa</h3>
            <p>Precio: $100.00</p>
          </div>
        </div>
        <div className="imagen">
          <img className="item" src={ravioli} alt="logo" />
          <div className="info">
            <h3>ravioli</h3>
            <p>Precio: $80.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Seccion2;

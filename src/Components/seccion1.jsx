import Nav from "../Components/navbar";
import "../App.css";

export const Seccion1 = () => {
  return (
    <div className="seccion-1">
      <Nav />
      <div className="Introduccion">
        <p>
          Sea bienvenido a la <br />
          experiencia de
        </p>
        <p className="p2">Pizza House</p>
      </div>
    </div>
  );
};
export default Seccion1;

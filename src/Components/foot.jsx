import "../App.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

export const Foot = () => {
  return (
    <footer>
      <div className="s3Up">
        <div>
          <hr />
        </div>
        <div className="nmCircular">Pizza House</div>
        <div>
          <hr />
        </div>
      </div>
      <div className="s3dw">
        <div className="s3dw1">
          <b>Direccion </b>
          <p>Calle Jesus del Valle, 40, 28004 Madrid</p>
          <hr />
          <p>Calle Jesus del Valle, 40, 28004 Madrid</p>
        </div>
        <div className="s3dw2">
          <b>Pizza house</b>
          <p>Lorem ipsum dolor sit amer</p>
          <b>Siguenos</b>
          <br />
          <FaFacebook style={{ color: "black", fontSize: "35px" }} />
          <AiFillInstagram style={{ color: "black", fontSize: "35px" }} />
          <AiFillTwitterCircle style={{ color: "black", fontSize: "35px" }} />
        </div>
        <div className="s3dw3">
          <b>Contactanos</b>
          <p>968 127 9111</p>
          <p>968 127 9111</p>
          <p>968 127 9111</p>
          <hr />
          <p>pizzaHouse@gmail.com</p>
          <p>pizzaHouse@gmail.com</p>
        </div>
      </div>
      <div>Copyright © 2020 Pizza House - Todos los derechos reservados.</div>
    </footer>
  );
};
export default Foot;

import logo from "../assets/logo.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TfiLocationPin } from "react-icons/tfi";
import { SlQuestion,SlNotebook } from "react-icons/sl";
import "../App.css";

export const Nav = () => {
  return (
    <div className="navbar">
      <div className="nb-grid1">
        <div>
          <Link to='/'><img className="log" src={logo} alt="logo" /></Link>
        </div>
        <div className="socialMedias">

        <a href="https://www.instagram.com/jorgecamto/" target="_blank" style={{ color: "white" }} rel="noreferrer">
        <FaInstagramSquare
            style={{
              fontSize: "40px",
              marginLeft: "35px",
              marginBottom: "15px",
              marginTop: "80px",
              marginRight: "20px",
            }}
          />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100012256841642" target="_blank" style={{ color: "white" }} rel="noreferrer">
        <FaFacebookSquare
            style={{
              fontSize: "40px",
              marginBottom: "15px",
              marginRight: "20px",
            }}
          />
        </a>
        <a href="https://www.twitter.com/" target="_blank" style={{ color: "white" }} rel="noreferrer">
        <FaTwitterSquare
            style={{
              fontSize: "40px",
              marginBottom: "15px",
              marginRight: "20px",
            }}
          />
        </a>

        </div>
      </div>
      <div className="nb-grid2">
        <div className="nombreEmpresa">Pizza House</div>
        <div className="bar4">
          
        <Link to="/mapa" style={{ color: "white" }} rel="noreferrer">
          <div>
            <TfiLocationPin style={{ color: "black", fontSize: "50px" }} />
            Visitanos
          </div>
        </Link>
        <Link to="#s3Up " style={{ color: "white" }} rel="noreferrer">
          <div>
            <SlQuestion style={{ color: "black", fontSize: "50px" }} />
            Contactanos
          </div>
          </Link>
          <Link to="/menu" style={{ color: "white" }} rel="noreferrer">
          <div>
            <SlNotebook style={{ color: "black", fontSize: "50px" }} />
            Menu
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Nav;

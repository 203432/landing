import "../App.css";
import Nav from "../Components/navbar";
import Platillo from "../Components/Platillo";
import image from "../assets/image 8.png";
import image2 from "../assets/image 10.png";
import image3 from "../assets/image 24.png";
import image4 from "../assets/ravioliravioli.png";
import image5 from "../assets/risotto.png";
import image6 from "../assets/insalata.png";
import image7 from "../assets/spagueti2.png";
import image8 from "../assets/pizza2.png";
import image9 from "../assets/Polpette.png";
import image10 from "../assets/bistec.png";
import image11 from "../assets/lasagna2.png";
import image12 from "../assets/porchette.png";
import image13 from "../assets/frico.png";
import image14 from "../assets/pizza3.png";
import image15 from "../assets/calzone.png";
import image16 from "../assets/tiramisu.png";
import image17 from "../assets/cannoli.png";
import image18 from "../assets/torta.png";
import image19 from "../assets/raconti.png";
import image20 from "../assets/zuccoto.png";


function Menu() {
    const items = [
        { name: 'Lasagnini', image: image, subtext: 'Descripción del item 1' , precio: '210'},
        { name: 'pasta Al ragù', image: image2, subtext: 'Descripción del item 2' , precio: '210'},
        { name: 'Pizza della nonna', image: image3, subtext: 'Descripción del item 3' , precio: '210'},
        { name: 'RavioliRavioli', image: image4, subtext: 'Descripción del item 3' , precio: '210'},
        { name: 'Risotto Di Pollo', image: image5, subtext: 'Descripción del item 3' , precio: '210'},
        { name: 'Insalata caprese', image: image6, subtext: 'Descripción del item 3' , precio: '210'},
        { name: 'Spaghetti alla carbonara', image: image7, subtext: 'Descripción del item 3' , precio: '210'},
        { name: 'Pizza al formaggio', image: image8, subtext: 'Descripción del item 3' , precio: '210'},
        { name: 'le polpette dello zio', image: image9, subtext: 'Descripción del item 3' , precio: '210'},
        { name: 'Bistec a la fiorentina', image: image10, subtext: 'Descripción del item 3' , precio: '210'},
        { name: 'Lasagnini special', image: image11, subtext: 'Descripción del item 3' , precio: '210'},
        { name: 'Porchetta', image: image12, subtext: 'Descripción del item 3' , precio: '210'},
        { name: 'Frico', image: image13, subtext: 'Descripción del item 3' , precio: '210'},
        { name: 'Pizza di peperoni', image: image14, subtext: 'Descripción del item 3' , precio: '210'},
        { name: 'Calzone', image: image15, subtext: 'Descripción del item 3' , precio: '210'},
        { name: 'Tiramisu', image: image16, subtext: 'Descripción del item 3' , precio: '210'},
        { name: 'Cannoli', image: image17, subtext: 'Descripción del item 3' , precio: '210'},
        { name: 'Torta Capresse', image: image18, subtext: 'Descripción del item 3' , precio: '210'},
        { name: 'Bocconti', image: image19, subtext: 'Descripción del item 3' , precio: '210'},
        { name: 'Zuccoto', image: image20, subtext: 'Descripción del item 3' , precio: '210'},
      ];
  return (
    <div className="Menu">
      <Nav/>
      <div className="Platillos-Container">
        <div className="platillos-container-header">
<div className="boton-header-container">Menú</div>
        </div>
        <div className="platillos-list">
        {items.map(item => (
        <Platillo key={item.name} name={item.name} image={item.image} subtext={item.subtext} precio={item.precio} />
      ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
import "../App.css";
import Nav from "../Components/navbar";

function Mapa() {
  return (
    <div className="Mapa">
      <Nav/>
      <div className="MapHeader">
      <div className="MapText">
        Llega facilmente:
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1910.779425399026!2d-93.71915379471129!3d16.69894485932079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85eca77914fae68f%3A0x631e05187ce388ab!2sV-Lidos%20Pizza%20Cintalapa!5e0!3m2!1ses-419!2smx!4v1680219153583!5m2!1ses-419!2smx" style={{width:"90%",height:"600px",border:"0px"}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
  );
}

export default Mapa;
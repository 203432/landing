import "../App.css";
import Nav from "../Components/navbar";

function Formulario() {
  return (
    <div className="Formulario">
      <Nav />
      <div className="MapText">Contactanos y danos tus sugerencias</div>

      <form action="enviar.php" method="post">
        <input
          type="text"
          name="name"
          id="name"
          class="name"
          placeholder="NOMBRE"
        />
        <input
          type="text"
          name="mail"
          id="mail"
          class="email"
          placeholder="CORREO"
        />
        <input
          type="text"
          name="phone"
          id="subject"
          class="subject"
          placeholder="TELÉFONO"
        />
        <textarea
          name="message"
          class="message"
          placeholder="MENSAJE ... "
          id="message"
        ></textarea>
        <div class="clear"></div>
        <div class="col-md-8">
          <button type="submit" class="btn btn-primary">
            ENVIAR
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;

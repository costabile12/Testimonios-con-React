import React from "react";
import '../hojas-de-estilo/Testimonio.css'

function resaltarPalabras(texto, palabrasResaltadas) {
  const partes =texto.split(new RegExp(`(${palabrasResaltadas.join('|')})`, 'gi'));
  return partes.map((parte, i) =>
    palabrasResaltadas.some(p => p.toLowerCase() === parte.toLowerCase()) ? <strong key={i}>{parte}</strong> : parte);
}


function Testimonio(props) {
  return(
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt='Foto de Emma' />
      
      <div className="contenedor-texto-testimonio">

        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>

        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>

        <p className="texto-testimonio">
          "{resaltarPalabras(props.testimonio, ['freeCodeCamp me cambió la vida', 'fue la puerta de entrada a mi carrera', 'freeCodeCamp, me dio las habilidades'])}"
        </p>

      </div>

    </div>
  );
}

export default Testimonio;
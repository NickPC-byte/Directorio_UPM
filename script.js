const container = document.getElementById("card-container");

function crearTarjetas() {
  directorio.forEach(persona => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-name">${persona.nombre}</div>

      <div class="card-field">
        <span>Celular:</span><br>
        <a class="card-link whatsapp-btn"
           target="_blank"
           href="https://wa.me/51${persona.celular}">
           ${persona.celular}
        </a>
      </div>

      <div class="card-field">
        <span>Correo Institucional:</span><br>
        <a class="card-link email-btn"
           target="_blank"
           href="https://mail.google.com/mail/?view=cm&fs=1&to=${persona.correo}">
           ${persona.correo}
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

crearTarjetas();

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Evento click para enviar correo
$("#boton1").click(function () {
  alert("El correo fue enviado correctamente...");
});

// Selectores de etiqueta para cambiar color al hacer doble clic
$("#ingredientes h3").on("dblclick", function () {
  $(this).css("color", "red");
});

$("#preparacion h3").on("dblclick", function () {
  $(this).css("color", "red");
});

// Selectores de clase para hacer aparecer/desaparecer contenido
$("#recetas-relacionadas .card").click(function () {
  $(this).find(".card-body").toggle();
});

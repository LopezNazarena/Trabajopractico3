const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
document.write(`<ol>`);
for (let losmeses = 0; losmeses < meses.length; losmeses++) {
  document.write(`<li>` + meses[losmeses] + `</li>`);
}
document.write(`</ol>`);

import { dataSeries } from './dataSeries.js';
var coursesTbody = document.getElementById('series');
var promedioTemporadasElm = document.getElementById("promedio-temporadas");
renderCoursesInTable(dataSeries);
promedioTemporadasElm.innerHTML = "".concat(getPromedioTemporadas(dataSeries));
function renderCoursesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.nombre, "</td>\n                           <td>").concat(serie.canal, "</td>\n                           <td>").concat(serie.temporadas, "</td>");
        coursesTbody.appendChild(trElement);
    });
}
function getPromedioTemporadas(series) {
    var totalTemporadas = 0;
    series.forEach(function (serie) { return totalTemporadas = totalTemporadas + serie.temporadas; });
    return totalTemporadas / series.length;
}

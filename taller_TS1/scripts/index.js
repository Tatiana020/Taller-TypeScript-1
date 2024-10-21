import './style.css';
import { dataSeries } from './dataSeries';
function cargarSeries() {
    var tableBody = document.querySelector("series");
    if (tableBody) {
        dataSeries.forEach(function (serie) {
            var row = document.createElement("tr");
            row.innerHTML = "\n        <th scope=\"row\">".concat(serie.id, "</th>\n        <td>").concat(serie.nombre, "</td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>\n      ");
            tableBody.appendChild(row);
        });
    }
    else {
        console.error("tableBody is null");
    }
}
cargarSeries();

import './style.css';
import { dataSeries } from './dataSeries';

function cargarSeries() {
  const tableBody = document.querySelector("series");

  if (tableBody) {
    dataSeries.forEach((serie) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <th scope="row">${serie.id}</th>
        <td>${serie.nombre}</td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>
      `;
      tableBody.appendChild(row);
    });
  } else {
    console.error("tableBody is null");
  }
}

cargarSeries();

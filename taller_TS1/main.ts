import { Serie } from './serie.js';
import { dataSeries } from './dataSeries.js';

let coursesTbody: HTMLElement = document.getElementById('series')!;
const promedioTemporadasElm: HTMLElement = document.getElementById("promedio-temporadas")!;

renderCoursesInTable(dataSeries);
promedioTemporadasElm.innerHTML = `${getPromedioTemporadas(dataSeries)}`

function renderCoursesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.nombre}</td>
                           <td>${serie.canal}</td>
                           <td>${serie.temporadas}</td>`; 
    coursesTbody.appendChild(trElement);
  });
}
function getPromedioTemporadas(series: Serie[]): number {
  let totalTemporadas: number = 0;
  series.forEach((serie) => totalTemporadas = totalTemporadas + serie.temporadas);
  return totalTemporadas / series.length;
}
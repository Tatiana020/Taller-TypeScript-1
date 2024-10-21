export class Serie {
    id: number;
    nombre: string;
    canal: string;
    temporadas: number;
    descripcion: string;
    link: string;
    poster: string;
  
    constructor(id: number, nombre: string, canal: string, temporadas: number, descripcion: string, link: string, poster: string) {
      this.id = id;
      this.nombre = nombre;
      this.canal = canal;
      this.temporadas = temporadas;
      this.descripcion = descripcion;
      this.link = link;
      this.poster = poster;
    }
  }
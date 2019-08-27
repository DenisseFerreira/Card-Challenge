
export class Card {
    public id: number;   
    public type:string; 
    public color: string;
    public urlImagen : string;
    public tapa : string;
    public imagen : string;
    public statusOpen : boolean;
    public statusFind : boolean; // find = encontrado ....encontro una igual
    public clase : string;

    

      constructor(id: number, type: string, color:string, urlImagen : string) {
          this.id = id;
          this.type = type;
          this.color = color;  
          this.urlImagen = urlImagen;
          this.tapa = 'tapa.jpg';
          this.imagen = 'tapa.jpg';
          this.statusFind = false;
          this.statusOpen = false;

      }
  }
  
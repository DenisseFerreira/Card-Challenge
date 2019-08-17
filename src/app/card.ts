
export class Card {
    public id: number;   
    public type:string; 
    public color: string;
    public urlImagen : string;
    public urlImagen2 : string;
    public statusOpen : boolean;
    public statusFind : boolean; // find = encontrado

    

      constructor(id: number, type: string, color:string, urlImagen : string, urlImagen2 : string) {
          this.id = id;
          this.type = type;
          this.color = color;  
          this.urlImagen = urlImagen;
          this.urlImagen2 = urlImagen2;
          this.statusFind = false;
          this.statusOpen = false;

      }
  }
  
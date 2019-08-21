import { Component, OnInit } from '@angular/core';
import { Card} from 'src/app/card'
import {cardsData} from '../../cardsData'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {

  cards : Card[] = [];
  
  
  constructor() {}

  ngOnInit() { 
    this.cards = cardsData;
    console.log(this.cards);
  }


  open(card:Card){
    console.log('primera');
    card.imagen = card.urlImagen;
    card.statusOpen = true;

  }
  //funcion que al hacer click se deben girar y mostrar la imagen de la carta  
  cliked(card : Card){ //este card tiene todo el objeto
    console.log('segunda')
  //console.log(card.id);

  card.imagen = card.urlImagen;

  card.statusOpen = true;
 this.cards.forEach(function (element){
   //console.log(element);
      if(element.statusOpen && element.id != card.id && !element.statusFind && !card.statusFind){

        if(card.type === element.type && card.color === element.color)
          {
            console.log(element);
            card.statusFind = true;
            element.statusFind= true;
          }else{
           alert('jajajja te equivocaste');
            card.imagen =  element.imagen = card.tapa;
            card.statusOpen = element.statusOpen = false;
          }
 
      }

  })

 /* if(!equalPair){
card.imagen = card.tapa;
  } 
*/

    
    // en tu arreglo buscas el id.... lo modifcas el statusOpen.


    // recorres el arreglo y buscas otro status open true,  y comparas los si las cartas son iguales
    // si lo son, dejas status encontrado true y las cartas en modo abierto

    // si no son iguales, debes dejar las cartas cerradas otra vez.


  }
   
}

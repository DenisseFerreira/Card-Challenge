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
  
  
  constructor() {
    
   }

  ngOnInit() { 
    this.cards = cardsData;
    console.log(this.cards)
  }

  //funcion que al hacer click se deben girar y mostrar la imagen de la carta  
  cliked(cards : Card){
console.log('hago click');

    
    // en tu arreglo buscas el id.... lo modifcas el statusOpen.


    // recorres el arreglo y buscas otro status open true,  y comparas los si las cartas son iguales
    // si lo son, dejas status encontrado true y las cartas en modo abierto

    // si no son iguales, debes dejar las cartas cerradas otra vez.


  }
}

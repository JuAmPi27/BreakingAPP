import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfaces/Personaje';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() personaje!: Personaje; // con el signo de exclamación "!" le decimos confia en mi que vas a tener datos

  constructor() { }

}

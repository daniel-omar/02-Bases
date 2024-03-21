import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './main-page.component.html'
})

export class MainComponent {

  public characters:Character[]=[
    {name:"Krillin",power:500},
    {name:"Goku",power:5000},
    {name:"Vegeta",power:7000}
  ]



}

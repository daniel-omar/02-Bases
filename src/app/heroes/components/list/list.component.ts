import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroes:string[]=["Spiderman","Hulk","Ironman","Thor"]
  public heroeRemoved:string="";

  removeLastHeroe():any{
    this.heroeRemoved= this.heroes.pop() || "";
    console.log(this.heroeRemoved)
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string="ironman";
  public age:number=45;
  public isChangeAge:boolean=false;
  public isChangeName:boolean=false;

  get CapitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroeDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name="Goku";
    this.isChangeName=true;
  }

  changeAge():void{
    this.age=100;
    this.isChangeAge=true;
  }

  resetForm():void{
    this.name="Ironman";
    this.age=25;
    this.isChangeName=false;
    this.isChangeAge=false;

  }

}

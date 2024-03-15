import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  counter:number=10;

  public addCounter(){
    this.counter+=1;
  }

  public reduceCounter(){
    this.counter-=1;
  }
}

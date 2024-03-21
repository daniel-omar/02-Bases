import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent {

  @Input("characterList")
  public characterList: Character[] = [
    {
      id: "",
      name: "Trunks",
      power: 2000
    }
  ]

  @Output("onDelete")
  public onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index: number): void {
  //   console.log(index)
  //   this.onDelete.emit(index)
  // }

  onDeleteCharacterById(id: string): void {
    this.onDelete.emit(id)
  }
}

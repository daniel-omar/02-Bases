import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main',
  templateUrl: './main-page.component.html'
})

export class MainComponent {

  constructor(private _dbzService: DBZService) {
  }

  get characters(): Character[] {
    return [...this._dbzService.characters];
  }

  deleteCharacterById(id: string): void {
    this._dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this._dbzService.addCharacter(character);
  }

}

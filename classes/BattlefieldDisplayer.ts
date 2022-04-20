import Battlefield from './Battlefield';
import Ship from './Ship';

class BattlefieldDisplayer {
  private _battlefield: Battlefield;

  constructor(battlefield: Battlefield) {
    this._battlefield = battlefield;
  }

  public display() {
    this._battlefield.grid.forEach((row) => {
      let rowText = '';
      //refactor later (maybe drawTile method)
      row.forEach((tile) => {
        let textToAdd = '';
        if (tile.state != null) {
          if (tile.state === 'Water') textToAdd = '[~]';
          if (tile.state === 'Hit') textToAdd = '[X]';
          if (tile.state === 'Miss') textToAdd = '[ ]';
          if (tile.state instanceof Ship) textToAdd = '[S]'; // to be removed later
        } else if (tile.name.includes('10')) {
          textToAdd = ` ${tile.name}`;
        } else {
          textToAdd = ` ${tile.name} `;
        }
        rowText += textToAdd;
      });
      console.log(rowText);
    });
  }
}

export default BattlefieldDisplayer
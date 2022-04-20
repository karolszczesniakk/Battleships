import Battlefield from './Battlefield';
import Ship from './Ship';

class Displayer {
  private _latestMessage: string;

  public displayBattlefield(battlefield: Battlefield) {
    battlefield.grid.forEach((row) => {
      let rowText = '';
      row.forEach((tile) => {
        let textToAdd = '';
        if (tile.state != null) {
          if (tile.state instanceof Ship) textToAdd = ' ~ '; 
          if (tile.state === 'Water') textToAdd = ' ~ ';
          if (tile.state === 'Hit') textToAdd = ' X ';
          if (tile.state === 'Miss') textToAdd = '   ';
        } else if (tile.name.includes('10')) {
          textToAdd = ` ${tile.name}`;
        } else {
          textToAdd = ` ${tile.name} `;
        }
        rowText += textToAdd;
      });
      console.log(rowText);
    });
    console.log('\n')
  }
  public renderGame(battlefield: Battlefield, ships: Ship[]): void {
    console.clear();
    this.displayBattlefield(battlefield);
    this.displayMessage();
    this.displayShipsHealth(ships);
  }
  public displayShipsHealth(ships: Ship[]) {
    ships.forEach((ship) => {
      console.log(`${ship.name}: ${ship.currentHealth}/${ship.maxHealth}`);
    });
    
  }

  public updateMessage(message: string) {
    this._latestMessage = message;
  }

  public displayMessage() {
    if (this._latestMessage) console.log(this._latestMessage + '\n');
  }
}

export default Displayer
import Battlefield from './Battlefield';
import Displayer from './Displayer';
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import Tile, { GridPosition } from './Tile';
import Ship from './Ship';

class Shooter {
  private _displayer: Displayer;
  private _battlefield: Battlefield;
  private _oneDimensionalGrid: Tile[];

  constructor(battlefield: Battlefield, displayer: Displayer) {
    this._displayer = displayer;
    this._battlefield = battlefield;
  }

  public setupOneDimensionalGrid() {
    const { grid } = this._battlefield;
    this._oneDimensionalGrid = [];
    grid.forEach(row => {
      return row.forEach(tile =>{this._oneDimensionalGrid.push(tile)})
    })
  } 

  public async shoot(positionName: string) {
    const targetTile = this._oneDimensionalGrid.find(
      (tile) => tile.name === positionName
    );

    if (!targetTile) return;

    if (targetTile.state === 'Water') {
      targetTile.state = 'Miss';
      this._displayer.updateMessage('Miss!');
      return;
    }
    if (targetTile.state === 'Hit' || targetTile.state === 'Miss') {
      this._displayer.updateMessage('You already shot here');
      return;
    }
    if (targetTile.state === null) {
      this._displayer.updateMessage('Wrong target position');
      return;
    }
    if (targetTile.state instanceof Ship) {
      let ship = targetTile.state;
      ship.hit();
      this._displayer.updateMessage(`You hit ${ship.name}`);

      targetTile.state = 'Hit';
      return;
    }
  }
}

export default Shooter;

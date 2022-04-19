import { transpile } from 'typescript';
import Tile, { TileState } from './Tile';

class Battlefield {
  private _battlefield: Tile[][];

  constructor() {
    this._battlefield = [];
  }

  public setupBattlefield() {
    this._battlefield = [];
    for (let i = 0; i < 11; i++) {
      this._battlefield.push([]);
      for (let y = 0; y < 11; y++) {
        let tileState: TileState = 'Water';
        if (y === 0 || i === 0) {
          tileState = null;
        }

        this._battlefield[i].push({
          id: this.calculateTileId(i,y),
          column: `${this.numToColumn(y)}`,
          row: i,
          state: tileState,
        });
      }
    }
  };

  public displayBattlefield() {
    this._battlefield.forEach(row => {
      let rowText = ''
      //refactor later (maybe drawTile method)
      row.forEach(tile => {
        if (tile.state != null) {
          if (tile.state === "Water") rowText = rowText + '[~]';
          if (tile.state === "Hit") rowText = rowText + '[X]';
          if (tile.state === "Miss") rowText = rowText + '[ ]';
        } else if (tile.row === 10) {
          rowText = rowText + ` ${tile.id}`;
        } else {
          rowText = rowText + ` ${tile.id} `;
        }
      })
      console.log(rowText);
    })
  }

  get battlefield() {
    return this._battlefield;
  }

  private numToColumn = (num: number) => {
    let s = '';
    let t;

    while (num > 0) {
      t = (num - 1) % 26;
      s = String.fromCharCode(65 + t) + s;
      num = ((num - t) / 26) | 0;
    }
    return s;
  };

  private calculateTileId(column: number, row: number) {
    if (column === 0 && row === 0) {
      return " ";
    }
    if (column === 0) {
      return this.numToColumn(row);
    } else {
      return `${this.numToColumn(row)}${column}`
    }
  }
}

export default Battlefield;

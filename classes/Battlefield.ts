import { transpile } from 'typescript';
import Ship from './Ship';
import Tile, { GridPosition, TileState } from './Tile';

class Battlefield {
  private _grid: Tile[][];

  constructor() {
    this._grid = [];
  }

  public setupBattlefield() {
    this._grid = [];

    for (let i = 0; i < 11; i++) {
      this._grid.push([]);
      for (let y = 0; y < 11; y++) {
        let tileState: TileState = 'Water';

        if (y === 0 || i === 0) {
          tileState = null;
        }

        this._grid[i].push({
          name: this.calculateTileName(i, y),
          gridPosition: [i, y],
          state: tileState,
        });
      }
    }
  }

  get grid() {
    return this._grid;
  }

  checkIfShipOnTile(gridPosition: GridPosition) {
    const [row, column] = gridPosition;
    return (this._grid[row][column].state instanceof Ship);
  }

  private numberToLetter = (num: number) => {
    let s = '';
    let t;

    while (num > 0) {
      t = (num - 1) % 26;
      s = String.fromCharCode(65 + t) + s;
      num = ((num - t) / 26) | 0;
    }
    return s;
  };

  private calculateTileName(column: number, row: number) {
    if (column === 0 && row === 0) {
      return ' ';
    }
    if (column === 0) {
      return this.numberToLetter(row);
    } else {
      return `${this.numberToLetter(row)}${column}`;
    }
  }
}

export default Battlefield;

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
          id: `${this.numToColumn(y)}${i}`,
          row: `${this.numToColumn(y)}`,
          column: i,
          state: tileState,
        });
      }
    }
  };

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
}

export default Battlefield;

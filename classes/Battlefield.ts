import Tile from '../types/Tile';

class Battlefield {
  private _battlefield: Tile[][];

  constructor() {
    this._battlefield = [];
  }

  setupBattlefield = () => {
    this._battlefield = [];
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

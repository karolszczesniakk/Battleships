import Ship from './Ship';

export type TileState = Ship | 'Water' | 'Hit' | 'Miss' | null
export type GridPosition = [row:number, column: number];

class Tile {
  private _name: string;
  private _gridPosition: GridPosition;
  private _state: TileState;

  public constructor(gridPosition: GridPosition) {
    this._gridPosition = gridPosition;
    this._name = this.chooseTileName(gridPosition);

    this._state = this.chooseTileState(gridPosition);
  }
  public get state() {
    return this._state;
  }

  public set state(state: TileState) {
    this._state = state;
  }

  public get name() {
    return this._name;
  }

  private chooseTileName(gridPosition: GridPosition): string {
    const [row, column] = gridPosition;
    if (column === 0 && row === 0) {
      return ' ';
    }
    if (row === 0) {
      return this.numberToLetter(column);
    } else {
      return `${this.numberToLetter(column)}${row}`;
    }
  }

  public isWater() {
    if (this._state === 'Water') return true;
    return false;
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

  private chooseTileState(gridPosition: GridPosition): TileState {
    const [row, column] = gridPosition;

    if (row === 0 || column === 0) return null;
    else return 'Water';
  }
};

export default Tile;

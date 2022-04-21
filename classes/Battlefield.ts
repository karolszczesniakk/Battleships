import Tile, { GridPosition } from './Tile';

export enum PlacingDirection{
  UP,
  DOWN,
  RIGHT,
  LEFT
};

class Battlefield {
  private _grid: Tile[][];
  private _tilesArray: Tile[];

  public constructor() {
    this._grid = [];
    this._tilesArray = [];
  }

  public setupBattlefield() {
    this.setupGrid();
    this.setupTilesArray();
  }

  public findTile(positionName: string) {
    return this._tilesArray.find((tile) => tile.name === positionName);
  }

  private setupGrid() {
    this._grid = [];
    for (let row = 0; row < 11; row++) {
      this._grid.push([]);
      for (let column = 0; column < 11; column++) {
        const tile = new Tile([row, column]);
        this._grid[row].push(tile);
      }
    }
  }

  private setupTilesArray() {
    this._tilesArray = [];
    this._grid.forEach((row) => {
      return row.forEach((tile) => {
        this._tilesArray.push(tile);
      });
    });
  }

  public get grid() {
    return this._grid;
  }

  public get tilesArray() {
    return this._tilesArray;
  }
}

export default Battlefield;

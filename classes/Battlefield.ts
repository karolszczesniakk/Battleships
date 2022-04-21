import { transpile } from 'typescript';
import Ship from './Ship';
import Tile, { GridPosition, TileState } from './Tile';

export enum PlacingDirection{
  UP,
  DOWN,
  RIGHT,
  LEFT
};

class Battlefield {
  private _grid: Tile[][];
  private _tilesArray: Tile[];

  constructor() {
    this._grid = [];
    this._tilesArray = [];
  }

  public setupBattlefield() {
    this.setupGrid();
    this.setupTilesArray();
  }

  public placeShip(
    ship: Ship,
    gridPosition: GridPosition,
    direction: PlacingDirection
  ) {
    const shipLength = ship.length;

    const isShipPlaceable = this.canShipBePlaced(
      shipLength,
      gridPosition,
      direction
    );

    if (!isShipPlaceable) return false;

    switch (direction) {
      case PlacingDirection.UP:
        this.placeShipUpwards(ship, gridPosition);
        break;
      case PlacingDirection.DOWN:
        this.placeShipDownwards(ship, gridPosition);
        break;
      case PlacingDirection.RIGHT:
        this.placeShipToTheRight(ship, gridPosition);
        break;
      case PlacingDirection.LEFT: {
        this.placeShipToTheLeft(ship, gridPosition);
      }
    }

    return true;
  }

  public findTile(positionName: string) {
    return this._tilesArray.find((tile) => tile.name === positionName);
  }

  private setupGrid() {
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

  private setupTilesArray() {
    this._tilesArray = [];
    this._grid.forEach((row) => {
      return row.forEach((tile) => {
        this._tilesArray.push(tile);
      });
    });
  }

  get grid() {
    return this._grid;
  }

  get tilesArray() {
    return this._tilesArray;
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

  private canShipBePlaced(
    shipLength: number,
    gridPosition: GridPosition,
    direction: PlacingDirection
  ) {
    switch (direction) {
      case PlacingDirection.UP:
        return this.checkUpwardsPlacement(gridPosition, shipLength);
      case PlacingDirection.DOWN:
        return this.checkDownwardsPlacement(gridPosition, shipLength);
      case PlacingDirection.RIGHT:
        return this.checkToTheRightPlacement(gridPosition, shipLength);
      case PlacingDirection.LEFT:
        return this.checkToTheLeftPlacement(gridPosition, shipLength);
    }
  }

  private checkUpwardsPlacement(
    gridPosition: GridPosition,
    shipLength: number
  ) {
    const [row, column] = gridPosition;

    if (row - shipLength < 0) return false;

    for (let i = row; i > row + 1 - shipLength; i--) {
      let tile = this._grid[i][column];
      if (!this.isTileEmpty(tile)) return false;
    }
    return true;
  }

  private checkDownwardsPlacement(
    gridPosition: GridPosition,
    shipLength: number
  ) {
    const [row, column] = gridPosition;

    if (shipLength + row > 11) return false;

    for (let i = row; i < row + shipLength; i++) {
      let tile = this._grid[i][column];
      if (!this.isTileEmpty(tile)) return false;
    }
    return true;
  }

  private checkToTheRightPlacement(
    gridPosition: GridPosition,
    shipLength: number
  ) {
    const [row, column] = gridPosition;

    if (column + shipLength > 11) return false;

    for (let i = column; i < column + shipLength; i++) {
      let tile = this._grid[row][i];
      if (!this.isTileEmpty(tile)) return false;
    }
    return true;
  }

  private checkToTheLeftPlacement(
    gridPosition: GridPosition,
    shipLength: number
  ) {
    const [row, column] = gridPosition;

    if (column - shipLength < 0) return false;

    for (let i = column; i > column - shipLength; i--) {
      let tile = this._grid[row][i];
      if (!this.isTileEmpty(tile)) return false;
    }
    return true;
  }

  private placeShipUpwards(ship: Ship, gridPosition: GridPosition) {
    const shipLength = ship.length;
    const [row, column] = gridPosition;
    for (let i = row; i > row - shipLength; i--) {
      let tile = this._grid[i][column];
      tile.state = ship;
    }
  }
  private placeShipDownwards(ship: Ship, gridPosition: GridPosition) {
    const [row, column] = gridPosition;
    const shipLength = ship.length;

    for (let i = row; i < row + shipLength; i++) {
      let tile = this._grid[i][column];
      tile.state = ship;
    }
  }

  private placeShipToTheRight(ship: Ship, gridPosition: GridPosition) {
    const [row, column] = gridPosition;
    const shipLength = ship.length;

    for (let i = column; i < column + shipLength; i++) {
      let tile = this._grid[row][i];
      tile.state = ship;
    }
  }

  private placeShipToTheLeft(ship: Ship, gridPosition: GridPosition) {
    const [row, column] = gridPosition;
    const shipLength = ship.length;

    for (let i = column; i > column - shipLength; i--) {
      let tile = this._grid[row][i];
      tile.state = ship;
    }
  }

  private isTileEmpty(tile: Tile) {
    if (tile.state === 'Water') return true;
    return false;
  }
}

export default Battlefield;

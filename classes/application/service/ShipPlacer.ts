import Battlefield, { PlacingDirection } from '../../battlefield/model/Battlefield';
import Ship from '../../ship/model/Ship';
import { GridPosition } from '../../battlefield/model/Tile';


class ShipPlacer {
  private _battlefield: Battlefield;

  constructor(battlefield: Battlefield) {
    this._battlefield = battlefield;
  }

  public placeShipsRandomly(ships: Ship[]) {
    ships.forEach((ship) => {
      while (true) {
        const rndDirection: PlacingDirection = this.randomDirection();
        const rndRow = this.getRandomNumber(1, 10);
        const rndColumn = this.getRandomNumber(1, 10);
        const successfullPlacing = this.placeShip(
          ship,
          [rndRow, rndColumn],
          rndDirection
        );
        if (successfullPlacing) break;
      }
    });
  }

  private placeShip(
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

  private randomDirection(): PlacingDirection {
    let randomNum = this.getRandomNumber(1, 4);
    if (randomNum === 1) return PlacingDirection.UP;
    if (randomNum === 2) return PlacingDirection.DOWN;
    if (randomNum === 3) return PlacingDirection.RIGHT;
    return PlacingDirection.LEFT;
  }

  private getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
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

    const grid = this._battlefield.grid;

    if (row - shipLength < 0) return false;

    for (let i = row; i > row + 1 - shipLength; i--) {
      let tile = grid[i][column];
      if (tile.isWater()) return true;
    }
    return false;
  }

  private checkDownwardsPlacement(
    gridPosition: GridPosition,
    shipLength: number
  ) {
    const [row, column] = gridPosition;
    const grid = this._battlefield.grid;

    if (shipLength + row > 11) return false;

    for (let i = row; i < row + shipLength; i++) {
      let tile = grid[i][column];
      if (tile.isWater()) return true;
    }
    return false;
  }

  private checkToTheRightPlacement(
    gridPosition: GridPosition,
    shipLength: number
  ) {
    const [row, column] = gridPosition;
    const grid = this._battlefield.grid;

    if (column + shipLength > 11) return false;

    for (let i = column; i < column + shipLength; i++) {
      let tile = grid[row][i];
      if (tile.isWater()) return true;
    }
    return false;
  }

  private checkToTheLeftPlacement(
    gridPosition: GridPosition,
    shipLength: number
  ) {
    const [row, column] = gridPosition;
    const grid = this._battlefield.grid;

    if (column - shipLength < 0) return false;

    for (let i = column; i > column - shipLength; i--) {
      let tile = grid[row][i];
      if (tile.isWater()) return true;
    }
    return false;
  }

  private placeShipUpwards(ship: Ship, gridPosition: GridPosition) {
    const shipLength = ship.length;
    const [row, column] = gridPosition;
    const grid = this._battlefield.grid;

    for (let i = row; i > row - shipLength; i--) {
      let tile = grid[i][column];
      tile.state = ship;
    }
  }
  private placeShipDownwards(ship: Ship, gridPosition: GridPosition) {
    const [row, column] = gridPosition;
    const shipLength = ship.length;
    const grid = this._battlefield.grid;

    for (let i = row; i < row + shipLength; i++) {
      let tile = grid[i][column];
      tile.state = ship;
    }
  }

  private placeShipToTheRight(ship: Ship, gridPosition: GridPosition) {
    const [row, column] = gridPosition;
    const shipLength = ship.length;
    const grid = this._battlefield.grid;

    for (let i = column; i < column + shipLength; i++) {
      let tile = grid[row][i];
      tile.state = ship;
    }
  }

  private placeShipToTheLeft(ship: Ship, gridPosition: GridPosition) {
    const [row, column] = gridPosition;
    const shipLength = ship.length;
    const grid = this._battlefield.grid;

    for (let i = column; i > column - shipLength; i--) {
      let tile = grid[row][i];
      tile.state = ship;
    }
  }
}

export default ShipPlacer;
